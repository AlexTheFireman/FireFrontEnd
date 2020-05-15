import React, { useState, useEffect } from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
export default function Table (props) {
    const [fires, setFires] = useState ([]);

        useEffect((api) => {
            let name = props.match.params.name;
            fetch('/api/get/' + name)
                .then(response => response.json())
                .then(data => {
                    setFires(data);
                });
        }, [props.match.params.name]);

    return (
        <table className="table table-bordered table-sm table-hover table-striped">
            <TableHead />
            <TableBody fires={fires} />
        </table>
    )
}
