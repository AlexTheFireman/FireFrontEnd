import React, { useState, useEffect } from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Link } from 'react-router-dom';

export default function POSTTable (props) {

    const [fires, setFires] = useState ([]);

        useEffect((api) => {
            const { name }  = props.match.params.param.fileName;
            const encoded = encodeURI(`/api/get/${name}`);
            fetch(encoded, {
                method: "POST",
                body: {
                    fireStation: props.match.params.param.fireStation,
                    message: props.match.params.param.message
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => {
                    setFires(data);
                });
        }, [props.match.params]);

    const body = fires.map(fire => <TableBody fire={fire} key={fire.id} />);

    return (

        <table className="table table-bordered table-sm table-hover table-striped">
            <Link to ={{
                pathname: '/filterForm',
                param: {fileName: props.match.params}
            }}>Filter</Link>
            <TableHead />
            <tbody>
                { body }
            </tbody>
        </table>
    )
}
