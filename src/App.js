import React, { useState, useEffect } from 'react';
import './App.css';

export default function App () {
    const [fires, setFires] = useState ([]);

    useEffect(() => {
        fetch("/api/fires")
            .then(response => response.json())
            .then(data => {
                setFires(data);
            });
    }, []);

            const body = fires.map((fire, i) => {
                return <tr key={i}>
                    <td className="bordered">{fire.id}</td>
                    <td className="bordered">{fire.date}</td>
                    <td className="bordered">{fire.message}</td>
                    <td className="bordered">{fire.addressObjectFireFeature}</td>
                    <td className="bordered">{fire.district}</td>
                    <td className="bordered">{fire.fireStation}</td>

                </tr>
            });

            return (
                <table className="table">
                    <thead className="thead-inverse">
                    <tr>
                        <th className="bordered">№ п/п</th>
                        <th className="bordered">Дата</th>
                        <th className="bordered">Сообщение</th>
                        <th className="bordered">Адрес, объект пожара</th>
                        <th className="bordered">Район выезда</th>
                        <th className="bordered">Подразделение</th>
                    </tr>
                    </thead>
                    <tbody>
                    {body}
                    </tbody>
                </table>
            );
        }
