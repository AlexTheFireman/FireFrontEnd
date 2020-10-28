import React, { useState, useEffect } from 'react';
import Table from "./Table";
import ReactSelect from "./ReactSelect";

export default function SimpliestFilteredTable (props) {

    const [fires, setFires] = useState ([]);
    const { name, fireStation, message, district, destination, whereWasTheFire }  = props.match.params;
    const objectWithProperties = { fireStation, message, district, destination, whereWasTheFire };
    const encoded = encodeURI(`/api/get/${name}`);
    useEffect((api) => {
        if (checkProperties(objectWithProperties)) {
            fetch(encoded, {
                method: "POST",
                body: JSON.stringify({
                    fireStation,
                    message,
                    district,
                    destination,
                    whereWasTheFire
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => {
                    setFires(data);
                });
            fetchTable({setFires, name})
        } else {
            fetch(encoded)
                .then(response => response.json())
                .then(data => {
                    setFires(data);
                });
        }
    }, [name]);

    const result = <h3>Итого выездов: {fires.length}</h3>;
    return (
        <>
            <div class="box">
                <div class="box1">
                    <ReactSelect onSubmit={(state) => fetchTable({setFires, name, ...state})}/>
                </div>
                <div class="box2" >
                    {result}
                </div>
            </div>
            <table className="table-sm table-hover table-striped">
                <Table fires = {fires}/>

            </table>
        </>
    )
}

const fetchTable = ({fireStation = "", message = "", district = "", destination = "", whereWasTheFire = "",
                        name, setFires}) => {
    const encoded = encodeURI(`/api/get/${name}`);
    fetch(encoded, {
        method: "POST",
        body: JSON.stringify({
            fireStation,
            message,
            district,
            destination,
            whereWasTheFire
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.length);
            setFires(data);
        });

}

function checkProperties(obj) {
    for(let key in obj){
        if (obj[key] !== null && obj[key] !== '')
            return false
    }
}

