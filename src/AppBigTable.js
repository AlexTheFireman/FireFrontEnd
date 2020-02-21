import React, { useState, useEffect } from 'react';
import './App.css';

export default function AppBigTable () {
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
                    <td className="bordered">{fire.object1}</td>
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
                    <td className="bordered">{fire.hydrant}</td>
                    <td className="bordered">{fire.reportPDF}</td>
                    <td className="bordered">{fire.locality}</td>
                    <td className="bordered">{fire.fireRank}</td>
                    <td className="bordered">{fire.detectionTime}</td>
                    <td className="bordered">{fire.messageTime}</td>
                    <td className="bordered">{fire.arrivalTime}</td>
                    <td className="bordered">{fire.firstNozzleTime}</td>
                    <td className="bordered">{fire.localizationTime}</td>
                    <td className="bordered">{fire.fireLiquidationTime}</td>
                    <td className="bordered">{fire.totalLiquidationTime}</td>
                    <td className="bordered">{fire.comment}</td>
                </tr>
            });

    return (
        <table className="table table-bordered table-sm table-hover table-striped">
            <thead className="thead-inverse">
                <tr>
                    <th className="bordered">№</th>
                    <th className="bordered">Дата</th>
                    <th className="bordered">Назначение сообщения</th>
                    <th className="bordered">Адрес, наименование объекта и характер (пожара, загорания, происшествия), S=пожара</th>
                    <th className="bordered">Район выезда</th>
                    <th className="bordered">Подразделение</th>
                    <th className="bordered">Объект назначения</th>
                    <th className="bordered">Из них объект назначения</th>
                    <th className="bordered">Проведение аварийно спасательных работ</th>
                    <th className="bordered">Спасено людей (Деблокировано)</th>
                    <th className="bordered">Эвакуировано</th>
                    <th className="bordered">Руководитель тушения пожара (Руководитель ликвидации аварии)</th>
                    <th className="bordered">ФИО</th>
                    <th className="bordered">Использование ГДЗС</th>
                    <th className="bordered">Время работы ГДЗС (без надписи мин.)</th>
                    <th className="bordered">Применение огнетушащих веществ</th>
                    <th className="bordered">1 отделение</th>
                    <th className="bordered">2 отделение</th>
                    <th className="bordered">3 отделение</th>
                    <th className="bordered">Резерв 1 (АМГ, ОП)</th>
                    <th className="bordered">Резерв 2 (АМГ, ОП)</th>
                    <th className="bordered">АМГ, ОП</th>
                    <th className="bordered">АМГ, (ОП)</th>
                    <th className="bordered">Использование ИППВ</th>
                    <th className="bordered">Донесение о пожаре формат *.pdf</th>
                    <th className="bordered">Село/город</th>
                    <th className="bordered">Ранг</th>
                    <th className="bordered">Время обнаружения</th>
                    <th className="bordered">Время сообщения</th>
                    <th className="bordered">Время прибыти</th>
                    <th className="bordered">Время подачи первого ствола</th>
                    <th className="bordered">Время локализации с момента подачи первого ствола</th>
                    <th className="bordered">Время ликвидации с момента локализации</th>
                    <th className="bordered">Время ликвидации последствий пожара (учитывая проведение спец работ)</th>
                    <th className="bordered">Примечание</th>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}
