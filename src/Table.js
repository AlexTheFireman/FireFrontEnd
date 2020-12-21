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

            <table className="thead-inverse table-sm table-hover table-striped">
                    <thead>
                        {head}
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
            </table>
        );



}

// const strings = Object.values(fires).map(key =>
//     <option value={key}>{fires[key]}</option>
// );
//     return (
//         <table className="thead-inverse table-sm table-hover table-striped">
//                 <thead>
//                 <tr className="bordered">
//                         {display.map(disp => <th>{disp}</th>)}
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr className="bordered">
//                         {strings.map(fire => <th>{fire}</th>)}
//                 </tr>
//                 </tbody>
//         </table>
//     );
//     const head = data.map((column, j) => {
//         return <tr className="bordered" key={j}>
//             <th>{column.id}</th>
//             <th>{column.date}</th>
//             <th>{column.message}</th>
//             <th>{column.addressObjectFireFeature}</th>
//             <th>{column.district}</th>
//             <th>{column.fireStation}</th>
//             <th>{column.object1}</th>
//             <th>{column.object2}</th>
//             <th>{column.rescueWorks}</th>
//             <th>{column.amountOfRescuedPeople}</th>
//             <th>{column.amountOfEvacuatedPeople}</th>
//             <th>{column.fireChiefRank}</th>
//             <th>{column.fireChiefName}</th>
//             <th>{column.amountOfSmokeGroups}</th>
//             <th>{column.smokeTime}</th>
//             <th>{column.extinguishingAgents}</th>
//             <th>{column.firstEngine}</th>
//             <th>{column.secondEngine}</th>
//             <th>{column.thirdEngine}</th>
//             <th>{column.firstReserve}</th>
//             <th>{column.secondReserve}</th>
//             <th>{column.firstSquadron}</th>
//             <th>{column.secondSquadron}</th>
//             <th>{column.hydrant}</th>
//             <th>{column.reportPDF}</th>
//             <th>{column.locality}</th>
//             <th>{column.fireRank}</th>
//             <th>{column.detectionTime}</th>
//             <th>{column.messageTime}</th>
//             <th>{column.arrivalTime}</th>
//             <th>{column.firstNozzleTime}</th>
//             <th>{column.localizationTime}</th>
//             <th>{column.fireLiquidationTime}</th>
//             <th>{column.totalLiquidationTime}</th>
//             <th>{column.comment}</th>
//         </tr>
//     });