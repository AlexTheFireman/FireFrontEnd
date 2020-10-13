import React from 'react';

export default function TableHead () {
    return (
        <thead >
        <tr>
            <th className="bordered" >№</th>
            <th className="bordered" >Дата</th>
            <th className="bordered" >Назначение сообщения</th>
            <th className="bordered" >Адрес, наименование объекта и характер (пожара, загорания, происшествия), S=пожара</th>
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
    )
}