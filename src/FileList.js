import React, { useState, useEffect } from "react";
import Table  from './Table.js';
import {Route} from "react-router-dom";
import Link from "react-router-dom/modules/Link";
import Switch from "react-bootstrap/cjs/Switch";

export default function FileList () {
    const [files, setFiles] = useState([]);

    useEffect((api) => {
        fetch("/api/get/all")
            .then(response => response.json())
            .then(data => {
                setFiles(data);
            });
    }, []);

    const FilesAPI = {
        files,
        all: function() { return this.files },
        get: function(name) {
            const isFile = f => f.fileName === name
            return this.files.find(isFile)
        }

    };

    const FullList = () => (
        <div>
            <ul>
                {
                    FilesAPI.all().map(f => (
                        <li key={f.fileName}>
                            <Link to={'/tables/${f.fileName}'}>{f.fileName}</Link>/>
                        </li>
                    ))
                }
            </ul>
        </div>

    );

    const body = () => (
        <Switch>
            <Route exact path='/fileList' component={FullList}/>
            <Route path='/tables/:fileName' component={Table}/>
        </Switch>
    );

    return (
        <table className="table table-bordered table-sm table-hover table-striped">
            <thead className="thead-inverse">
                <tr>
                    <th className="bordered">Files</th>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}









