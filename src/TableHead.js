import React from 'react';

export default function TableHead () {
    return (
        <thead className="thead-inverse">
            <tr>
                <th className="bordered">№</th>
                <th className="bordered">Дата</th>
                <th className="bordered">Сообщение</th>
                <th className="bordered">Адрес, объект пожара</th>
                <th className="bordered">Район выезда</th>
                <th className="bordered">Подразделение</th>
            </tr>
        </thead>
    )
}