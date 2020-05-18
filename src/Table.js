import React, { useState, useEffect } from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table (props) {
    const [fires, setFires] = useState ([]);

        useEffect((api) => {
            const { name } = props.match.params;
            fetch('/api/get/' + name)
                .then(response => response.json())
                .then(data => {
                    setFires(data);
                });
        }, [props.match.params.name]);

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
