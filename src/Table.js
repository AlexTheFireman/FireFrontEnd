import React from 'react';

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

    return (
        <table className="thead-inverse table-sm table-hover table-striped">
            <thead   >
            <tr className="bordered">
                <th>№</th>
                <th>Дата</th>
                <th>Назначение сообщения</th>
                <th>Адрес, наименование объекта и характер (пожара, загорания, происшествия), S=пожара</th>
                <th>Район выезда</th>
                <th>Подразделение</th>
                <th>Объект назначения</th>
                <th>Из них объект назначения</th>
                <th>Проведение аварийно спасательных работ</th>
                <th>Спасено людей (Деблокировано)</th>
                <th>Эвакуировано</th>
                <th>Руководитель тушения пожара (Руководитель ликвидации аварии)</th>
                <th>ФИО</th>
                <th>Использование ГДЗС</th>
                <th>Время работы ГДЗС (без надписи мин.)</th>
                <th>Применение огнетушащих веществ</th>
                <th>1 отделение</th>
                <th>2 отделение</th>
                <th>3 отделение</th>
                <th>Резерв 1 (АМГ, ОП)</th>
                <th>Резерв 2 (АМГ, ОП)</th>
                <th>АМГ, ОП</th>
                <th>АМГ, (ОП)</th>
                <th>Использование ИППВ</th>
                <th>Донесение о пожаре формат *.pdf</th>
                <th>Село/город</th>
                <th>Ранг</th>
                <th>Время обнаружения</th>
                <th>Время сообщения</th>
                <th>Время прибыти</th>
                <th>Время подачи первого ствола</th>
                <th>Время локализации с момента подачи первого ствола</th>
                <th>Время ликвидации с момента локализации</th>
                <th>Время ликвидации последствий пожара (учитывая проведение спец работ)</th>
                <th>Примечание</th>
            </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}
