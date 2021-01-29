import React from 'react';
import data from './headArray.json';
/**
 * @return {boolean}
 */

export default function Table ({fires}) {

        const head = Object.keys(data).map(key => {
            return <th value={key}>{data[key]}</th >
        });


        const body = fires.map((fire, index) => {
                return <tr className="bordered" key={index}>
                    {Object.keys(data).map(key =>
                    <td key={key}>{fire[key]}</td>)}
                </tr>
        });

        return (
            <table className="thead-inverse table-hover table-striped">
                    <thead>
                        {head}
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
            </table>
        );
}
