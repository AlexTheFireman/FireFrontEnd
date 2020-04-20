import React, { useState, useEffect } from "react";

export default function FileList () {
    const [files, setFiles] = useState([]);

    useEffect((api) => {
        fetch("/api/get/all")
            .then(response => response.json())
            .then(data => {
                setFiles(data);
            });
    }, []);

    const body = files.map((file, i) => {
        return (
            <tr key={i}>
                <td className="bordered">{file}</td>
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




