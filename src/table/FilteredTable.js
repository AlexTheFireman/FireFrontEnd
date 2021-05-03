import React, {useState, useEffect} from 'react';
import ReactSelect from "./ReactSelect";
import BasicTable from './BasicTable.js'

export default function SimplestFilteredTable(props) {

    const [fires, setFires] = useState([]);

    const {
        name,
        fireStation,
        message,
        district,
        destination,
        whereWasTheFire,
        rescueWorks,
        fireChiefRank,
        amountOfSmokeGroups,
        extinguishingAgents,
        usingHydrants,
        locality,
        fireRank
    } = props.match.params;

    const objectWithProperties = {
        fireStation,
        message,
        district,
        destination,
        whereWasTheFire,
        rescueWorks,
        fireChiefRank,
        amountOfSmokeGroups,
        extinguishingAgents,
        usingHydrants,
        locality,
        fireRank
    };

    const encoded = encodeURI(`/api/file/get/${name}`);

    useEffect((api) => {
        if (checkProperties(objectWithProperties)) {
            fetch(encoded, {
                method: "POST",
                body: JSON.stringify({
                    fireStation,
                    message,
                    district,
                    destination,
                    whereWasTheFire,
                    rescueWorks,
                    fireChiefRank,
                    amountOfSmokeGroups,
                    extinguishingAgents,
                    usingHydrants,
                    locality,
                    fireRank
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
            <div className="box">
                <div className="box1">
                    <ReactSelect onSubmit={(state) => fetchTable({setFires, name, ...state})}/>
                </div>
                <div className="box2">
                    {result}
                </div>
            </div>
            <table className="table-hover table-striped">
                <BasicTable fires={fires}/>
            </table>
        </>
    )
}

const fetchTable = ({
                        fireStation = "",
                        message = "",
                        district = "",
                        destination = "",
                        whereWasTheFire = "",
                        rescueWorks = "",
                        fireChiefRank = "",
                        amountOfSmokeGroups = "",
                        extinguishingAgents = "",
                        usingHydrants = "",
                        locality = "",
                        fireRank = "",
                        name,
                        setFires
                    }) => {
    const encoded = encodeURI(`/api/file/get/${name}`);

    fetch(encoded, {
        method: "POST",
        body: JSON.stringify({
            fireStation,
            message,
            district,
            destination,
            whereWasTheFire,
            rescueWorks,
            fireChiefRank,
            amountOfSmokeGroups,
            extinguishingAgents,
            usingHydrants,
            locality,
            fireRank
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
};

function checkProperties(obj) {
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== '')
            return false
    }
}

