import React from 'react';

export default function TableBody ({fire}) {

    return (
        <tr>
            <td className="bordered">{fire.id}</td>
            <td className="bordered">{fire.date}</td>
            <td className="bordered">{fire.message}</td>
            <td className="bordered">{fire.addressObjectFireFeature}</td>
            <td className="bordered">{fire.district}</td>
            <td className="bordered">{fire.fireStation}</td>
            <td className="bordered">{fire.destination}</td>
            <td className="bordered">{fire.object2}</td>
            <td className="bordered">{fire.rescueWorks}</td>
            <td className="bordered">{fire.amountOfRescuedPeople}</td>
            <td className="bordered">{fire.amountOfEvacuatedPeople}</td>
            <td className="bordered">{fire.fireChiefRank}</td>
            <td className="bordered">{fire.fireChiefName}</td>
            <td className="bordered">{fire.amountOfSmokeGroups}</td>
            <td className="bordered">{fire.smokeTime}</td>
            <td className="bordered">{fire.extinguishingAgents}</td>
            <td className="bordered">{fire.firstEngine}</td>
            <td className="bordered">{fire.secondEngine}</td>
            <td className="bordered">{fire.thirdEngine}</td>
            <td className="bordered">{fire.firstReserve}</td>
            <td className="bordered">{fire.secondReserve}</td>
            <td className="bordered">{fire.firstSquadron}</td>
            <td className="bordered">{fire.secondSquadron}</td>
            <td className="bordered">{fire.usingHydrants}</td>
            <td className="bordered">{fire.reportPDF}</td>
            <td className="bordered">{fire.locality}</td>
            <td className="bordered">{fire.fireRank}</td>
            <td className="bordered">{fire.detectionTime}</td>
            <td className="bordered">{fire.messageTime}</td>
            <td className="bordered">{fire.arrivalTime}</td>
            <td className="bordered">{fire.firstNozzleTime}</td>
            <td className="bordered">{fire.localizationTime}</td>
            <td className="bordered">{fire.burningLiquidationTime}</td>
            <td className="bordered">{fire.totalLiquidationTime}</td>
            <td className="bordered">{fire.comment}</td>
        </tr>
    )
}

