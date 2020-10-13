import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function FileList () {
    const [files, setFiles] = useState([]);

    useEffect((api) => {
        fetch("/api/get/all")
            .then(response => response.json())
            .then(data => {
                setFiles(data);
            });
    }, []);

    function deleteHandler(fileName) {
        console.log('delete ' + fileName);
        fetch(`/api/delete/${fileName}`, {
            method: 'DELETE',

        }).then(() => {
            fetch("/api/get/all")
                .then(response => response.json())
                .then(data => {
                    setFiles(data);
                });
        });
    };

    const body = files.map((fileName) => {
        return (
            <tr key={fileName}>
                <td>
                    <div class="box">
                        <Link class="listBox1" to={`/tables/${fileName}`}>{fileName}</Link>
                        <button className="listBox2 myButton deleteButton"
                                onClick={() => deleteHandler(fileName)}>Удалить</button>
                    </div>
                </td>
            </tr>)
    });

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




