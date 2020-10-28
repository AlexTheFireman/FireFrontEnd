import React from 'react';
import data from './headArray.json';
/**
 * @return {boolean}
 */

export default function Table ({fires}) {
    const body = fires.map((fire, i) => {
        return <tr className="bordered" key={i}>
            <td>{fire.id}</td>
            <td>{fire.date}</td>
            <td>{fire.message}</td>
            <td>{fire.addressObjectFireFeature}</td>
            <td>{fire.district}</td>
            <td>{fire.fireStation}</td>
            <td>{fire.object1}</td>
            <td>{fire.object2}</td>
            <td>{fire.rescueWorks}</td>
            <td>{fire.amountOfRescuedPeople}</td>
            <td>{fire.amountOfEvacuatedPeople}</td>
            <td>{fire.fireChiefRank}</td>
            <td>{fire.fireChiefName}</td>
            <td>{fire.amountOfSmokeGroups}</td>
            <td>{fire.smokeTime}</td>
            <td>{fire.extinguishingAgents}</td>
            <td>{fire.firstEngine}</td>
            <td>{fire.secondEngine}</td>
            <td>{fire.thirdEngine}</td>
            <td>{fire.firstReserve}</td>
            <td>{fire.secondReserve}</td>
            <td>{fire.firstSquadron}</td>
            <td>{fire.secondSquadron}</td>
            <td>{fire.hydrant}</td>
            <td>{fire.reportPDF}</td>
            <td>{fire.locality}</td>
            <td>{fire.fireRank}</td>
            <td>{fire.detectionTime}</td>
            <td>{fire.messageTime}</td>
            <td>{fire.arrivalTime}</td>
            <td>{fire.firstNozzleTime}</td>
            <td>{fire.localizationTime}</td>
            <td>{fire.fireLiquidationTime}</td>
            <td>{fire.totalLiquidationTime}</td>
            <td>{fire.comment}</td>
        </tr>
    });
    const head = data.map((column, j) => {
        return <tr className="bordered" key={j}>
            <th>{column.id}</th>
            <th>{column.date}</th>
            <th>{column.message}</th>
            <th>{column.addressObjectFireFeature}</th>
            <th>{column.district}</th>
            <th>{column.fireStation}</th>
            <th>{column.object1}</th>
            <th>{column.object2}</th>
            <th>{column.rescueWorks}</th>
            <th>{column.amountOfRescuedPeople}</th>
            <th>{column.amountOfEvacuatedPeople}</th>
            <th>{column.fireChiefRank}</th>
            <th>{column.fireChiefName}</th>
            <th>{column.amountOfSmokeGroups}</th>
            <th>{column.smokeTime}</th>
            <th>{column.extinguishingAgents}</th>
            <th>{column.firstEngine}</th>
            <th>{column.secondEngine}</th>
            <th>{column.thirdEngine}</th>
            <th>{column.firstReserve}</th>
            <th>{column.secondReserve}</th>
            <th>{column.firstSquadron}</th>
            <th>{column.secondSquadron}</th>
            <th>{column.hydrant}</th>
            <th>{column.reportPDF}</th>
            <th>{column.locality}</th>
            <th>{column.fireRank}</th>
            <th>{column.detectionTime}</th>
            <th>{column.messageTime}</th>
            <th>{column.arrivalTime}</th>
            <th>{column.firstNozzleTime}</th>
            <th>{column.localizationTime}</th>
            <th>{column.fireLiquidationTime}</th>
            <th>{column.totalLiquidationTime}</th>
            <th>{column.comment}</th>
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
