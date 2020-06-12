import React, { useState, useEffect } from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function POSTTable (props) {

    const [fires, setFires] = useState ([]);

        useEffect((api) => {
            const { name }  = props.match.params;
            const encoded = encodeURI(`/api/get/${name}`);
            fetch(encoded, {
                method: "POST",
                body: JSON.stringify({
                    fireStation: "1 ПСЧ"
                }),
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
            <TableHead />
            <tbody>
                { body }
            </tbody>
        </table>
    )
}
