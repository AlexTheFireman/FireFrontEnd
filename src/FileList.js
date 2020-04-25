import React, { useState, useEffect } from "react";
import  Table  from './Table.js';
import {Route} from "react-router-dom";
import Link from "react-router-dom/modules/Link";

export default function FileList () {
    const [files, setFiles] = useState([]);

    useEffect((api) => {
        fetch("/api/get/{fileName}")
            .then(response => response.json())
            .then(data => {
                setFiles(data);
            });
    }, []);

    const body = files.map((file, fileName) => {
        return (
            <tr key={fileName}>
                <td className="bordered">
                    <Link to={'/tables/:fileName'}>{file}</Link>/>
                    </td>
                /*<td className="bordered">{file}/></td>*/

            </tr>)

    })


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




