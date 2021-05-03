export const COLUMNS = [
    {
        Header: '№',
        accessor: 'id', // accessor is the "key" in the data
    },
    {
        Header: 'Дата',
        accessor: 'date',
    },
    {
        Header: 'Назначение сообщения',
        accessor: 'message', // accessor is the "key" in the data
    },
    {
        Header: 'Адрес, наименование объекта и характер (пожара, загорания, происшествия), S=пожара',
        accessor: 'addressObjectFireFeature', // accessor is the "key" in the data
    },
    {
        Header: 'Район выезда',
        accessor: 'district', // accessor is the "key" in the data
    },
    {
        Header: 'Подразделение',
        accessor: 'fireStation', // accessor is the "key" in the data
    },
    {
        Header: 'Объект назначения',
        accessor: 'object1', // accessor is the "key" in the data
    },
    {
        Header: 'Из них объект назначения',
        accessor: 'object2', // accessor is the "key" in the data
    },
    {
        Header: 'Проведение аварийно спасательных работ',
        accessor: 'rescueWorks', // accessor is the "key" in the data
    },
    {
        Header: 'Спасено людей (Деблокировано)',
        accessor: 'amountOfRescuedPeople', // accessor is the "key" in the data
    },
    {
        Header: 'Эвакуировано',
        accessor: 'amountOfEvacuatedPeople', // accessor is the "key" in the data
    },
    {
        Header: 'Руководитель тушения пожара (Руководитель ликвидации аварии)',
        accessor: 'fireChiefRank', // accessor is the "key" in the data
    },
    {
        Header: 'ФИО',
        accessor: 'fireChiefName', // accessor is the "key" in the data
    },
    {
        Header: 'Использование ГДЗС',
        accessor: 'amountOfSmokeGroups', // accessor is the "key" in the data
    },
    {
        Header: 'Время работы ГДЗС (без надписи мин.)',
        accessor: 'smokeTime', // accessor is the "key" in the data
    },
    {
        Header: 'Применение огнетушащих веществ',
        accessor: 'extinguishingAgents', // accessor is the "key" in the data
    },
    {
        Header: '1 отделение',
        accessor: 'firstEngine', // accessor is the "key" in the data
    },
    {
        Header: '2 отделение',
        accessor: 'secondEngine', // accessor is the "key" in the data
    },
    {
        Header: '3 отделение',
        accessor: 'thirdEngine', // accessor is the "key" in the data
    },
    {
        Header: 'Резерв 1 (АМГ, ОП)',
        accessor: 'firstReserve', // accessor is the "key" in the data
    },
    {
        Header: 'Резерв 2 (АМГ, ОП)',
        accessor: 'secondReserve', // accessor is the "key" in the data
    },
    {
        Header: 'АМГ, ОП',
        accessor: 'firstSquadron', // accessor is the "key" in the data
    },
    {
        Header: 'АМГ, (ОП)',
        accessor: 'secondSquadron', // accessor is the "key" in the data
    },
    {
        Header: 'Использование ИНППВ',
        accessor: 'hydrant', // accessor is the "key" in the data
    },
    {
        Header: 'Донесение о пожаре формат *.pdf',
        accessor: 'reportPDF', // accessor is the "key" in the data
    },
    {
        Header: 'Село/город',
        accessor: 'locality', // accessor is the "key" in the data
    },
    {
        Header: 'Ранг',
        accessor: 'fireRank', // accessor is the "key" in the data
    },
    {
        Header: 'Время обнаружения',
        accessor: 'detectionTime', // accessor is the "key" in the data
    },
    {
        Header: 'Время сообщения',
        accessor: 'messageTime', // accessor is the "key" in the data
    },
    {
        Header: 'Время прибытия',
        accessor: 'arrivalTime', // accessor is the "key" in the data
    },
    {
        Header: 'Время подачи первого ствола',
        accessor: 'firstNozzleTime', // accessor is the "key" in the data
    },
    {
        Header: 'Время локализации с момента подачи первого ствола',
        accessor: 'localizationTime', // accessor is the "key" in the data
    },
    {
        Header: 'Время ликвидации с момента локализации',
        accessor: 'fireLiquidationTime', // accessor is the "key" in the data
    },
    {
        Header: 'Время ликвидации последствий пожара (учитывая проведение спец работ)',
        accessor: 'totalLiquidationTime', // accessor is the "key" in the data
    },
    {
        Header: 'Примечание',
        accessor: 'comment', // accessor is the "key" in the data
    }

]