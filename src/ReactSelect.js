import React from 'react'
import Select from 'react-select';

const fireStation = [
    { value: '1 ПСЧ', label: '1 ПСЧ', group: 'fireStation'},
    { value: '2 ПСЧ', label: '2 ПСЧ', group: 'fireStation'},
    { value: '3 ПСЧ', label: '3 ПСЧ', group: 'fireStation'},
    { value: '4 ПСЧ', label: '4 ПСЧ', group: 'fireStation'},
    { value: '5 ПСЧ', label: '5 ПСЧ', group: 'fireStation'},
    { value: '6 ПСЧ', label: '6 ПСЧ', group: 'fireStation'},

];

const message = [
    { value: 'Пожар', label: 'Пожар', group: 'message'},
    { value: 'ДТП', label: 'ДТП', group: 'message'},
    { value: 'Оказание помощи населению', label: 'Оказание помощи населению', group: 'message'},
    { value: 'Ложный', label: 'Ложный', group: 'message'},
    { value: 'КЗ без последующего горения', label: 'КЗ без последующего горения', group: 'message'},
    { value: 'Пища на плите без последующего горения', label: 'Пища на плите без последующего горения', group: 'message'},
    { value: 'Ложные АПС', label: 'Ложные АПС', group: 'message'},
    { value: 'Учения', label: 'Учения', group: 'message'},
    { value: 'Отработка ПТК и КТП', label: 'Отработка ПТК и КТП', group: 'message'},
    { value: 'Взаимодействие со 102', label: 'Взаимодействие со 102', group: 'message'},
    { value: 'Взаимодействие со 103', label: 'Взаимодействие со 103', group: 'message'},
    { value: 'Взаимодействие со 104', label: 'Взаимодействие со 104', group: 'message'},
    { value: 'Взаимодействие с иными службами города', label: 'Взаимодействие с иными службами города', group: 'message'},
    { value: 'ПТЗ', label: 'ПТЗ', group: 'message'},
    { value: 'НПТЗ', label: 'НПТЗ', group: 'message'},
    { value: 'Заправка ГСМ', label: 'Заправка ГСМ', group: 'message'},
    { value: 'Проверка ИППВ', label: 'Проверка ИППВ', group: 'message'},
    { value: 'Испытание ПТВ', label: 'Испытание ПТВ', group: 'message'},
    { value: 'Испытание рукавов', label: 'Испытание рукавов', group: 'message'},
    { value: 'Проверка боеготовности', label: 'Проверка боеготовности', group: 'message'},
    { value: 'Проведение аварийно-спасательных работ', label: 'Проведение аварийно-спасательных работ', group: 'message'},
    { value: 'Отработка нормативов', label: 'Отработка нормативов', group: 'message'},
    { value: 'Обеспечение мероприятий по "Варианту"', label: 'Обеспечение мероприятий по "Варианту"', group: 'message'},
    { value: 'Обеспечение городских мероприятий', label: 'Обеспечение городских мероприятий', group: 'message'},
    { value: 'Установка световой башни', label: 'Установка световой башни', group: 'message'},
    { value: 'Изучение района выезда', label: 'Изучение района выезда', group: 'message'},
    { value: 'Патрулирование', label: 'Патрулирование', group: 'message'},
    { value: 'Проведение занятий с автолестницей', label: 'Проведение занятий с автолестницей', group: 'message'},
    { value: 'Иные', label: 'Иные', group: 'message'},
];

const district = [
    {value: 'Ленинский', label: 'Ленинский', group: 'district'},
    {value: 'Нахимовский корабельная сторона', label: 'Нахимовский корабельная сторона', group: 'district'},
    {value: 'Нахимовский северная сторона', label: 'Нахимовский северная сторона', group: 'district'},
    {value: 'Балаклавский', label: 'Балаклавский', group: 'district'},
    {value: 'Балаклавский г. Инкерман', label: 'Балаклавский г. Инкерман', group: 'district'},
    {value: 'Гагаринский', label: 'Гагаринский', group: 'district'},
];

const destination = [
    {value: 'Тушение пожаров на объектах производственной сферы', label: 'Тушение пожаров на объектах производственной сферы', group: 'destination'},
    {value: 'Тушение пожаров в жилых зданиях', label: 'Тушение пожаров в жилых зданиях', group: 'destination'},
    {value: 'Тушение пожаров в зданиях общественного назначения', label: 'Тушение пожаров в зданиях общественного назначения', group: 'destination'},
    {value: 'Тушение пожаров на транспорте', label: 'Тушение пожаров на транспорте', group: 'destination'},
    {value: 'Тушение пожаров строящихся объектов различного назначения', label: 'Тушение пожаров строящихся объектов различного назначения', group: 'destination'},
    {value: 'Тушение пожаров на открытых территориях', label: 'Тушение пожаров на открытых территориях', group: 'destination'},
    {value: 'Тушение мусора', label: 'Тушение мусора', group: 'destination'},
];

const whereWasTheFire = [
    {value: 'На промышленных объектах', label: 'На промышленных объектах', group: 'whereWasTheFire'},
    {value: 'На объектах сельского хозяйства', label: 'На объектах сельского хозяйства', group: 'whereWasTheFire'},
    {value: 'На объектах добычи, хранения, переработки нефти, а также магистральных газо и нефтепроводах', label: 'На объектах добычи, хранения, переработки нефти, а также магистральных газо и нефтепроводах', group: 'whereWasTheFire'},
    {value: 'В том числе  в многоквартирных домах до 9 этажей включительно', label: 'В том числе  в многоквартирных домах до 9 этажей включительно', group: 'whereWasTheFire'},
    {value: 'В том числе  в многоквартирных домах свыше 9 этажей', label: 'В том числе  в многоквартирных домах свыше 9 этажей', group: 'whereWasTheFire'},
    {value: 'В частных домовладениях', label: 'В частных домовладениях', group: 'whereWasTheFire'},
    {value: 'В детских и образовательных учреждениях', label: 'В детских и образовательных учреждениях', group: 'whereWasTheFire'},
    {value: 'В детских и образовательных учреждениях', label: 'В детских и образовательных учреждениях', group: 'whereWasTheFire'},
    {value: 'В лечебных учреждениях', label: 'В лечебных учреждениях', group: 'whereWasTheFire'},
    {value: 'В культурно-зрелищных и спортивных учреждениях', label: 'В культурно-зрелищных и спортивных учреждениях', group: 'whereWasTheFire'},
    {value: 'В учреждениях торговли и общественного питания', label: 'В учреждениях торговли и общественного питания', group: 'whereWasTheFire'},
    {value: 'В административных учреждениях', label: 'В административных учреждениях', group: 'whereWasTheFire'},
    {value: 'На других объектах с массовым сосредоточением людей', label: 'На других объектах с массовым сосредоточением людей', group: 'whereWasTheFire'},
    {value: 'На автомобильном', label: 'На автомобильном', group: 'whereWasTheFire'},
    {value: 'На железнодорожном', label: 'На железнодорожном', group: 'whereWasTheFire'},
    {value: 'На воздушном', label: 'На воздушном', group: 'whereWasTheFire'},
    {value: 'На морском и речном', label: 'На морском и речном', group: 'whereWasTheFire'},
    {value: 'Сухая трава, камыш и т.д. на землях муниципальных образований', label: 'Сухая трава, камыш и т.д. на землях муниципальных образований', group: 'whereWasTheFire'},
    {value: 'Сельскохозяйственные поля зерновых и технических культур', label: 'Сельскохозяйственные поля зерновых и технических культур', group: 'whereWasTheFire'},
    {value: 'На территории жилых зон, домовладений, в контейнерах для мусора', label: 'На территории жилых зон, домовладений, в контейнерах для мусора', group: 'whereWasTheFire'},
    {value: 'На территории предприятий, организаций, учреждений', label: 'На территории предприятий, организаций, учреждений', group: 'whereWasTheFire'},
    {value: 'На территории полигонов твердых бытовых отходов (свалки)', label: 'На территории полигонов твердых бытовых отходов (свалки)', group: 'whereWasTheFire'},
    {value: 'На строящихся объектах жилого назначения', label: 'На строящихся объектах жилого назначения', group: 'whereWasTheFire'},
    {value: 'На строящихся объектах не жилого назначения', label: 'На строящихся объектах не жилого назначения', group: 'whereWasTheFire'},
];

const rescueWorks = [
    {value: 'Спасение и эвакуация из горящего объекта', label: 'Спасение и эвакуация из горящего объекта', group: 'rescueWorks'},
    {value: 'Вскрытие и разборка конструкций', label: 'Вскрытие и разборка конструкций', group: 'rescueWorks'},
    {value: 'Дымоудаление', label: 'Дымоудаление', group: 'rescueWorks'},
    {value: 'Ликвидация последствий ДТП', label: 'Ликвидация последствий ДТП', group: 'rescueWorks'},
    {value: 'Ликвидация аварий с радиационным заражением', label: 'Ликвидация аварий с радиационным заражением', group: 'rescueWorks'},
    {value: 'Ликвидация аварий с химическим заражением', label: 'Ликвидация аварий с химическим заражением', group: 'rescueWorks'},
    {value: 'Ликвидация аварий с биологическим заражением', label: 'Ликвидация аварий с биологическим заражением', group: 'rescueWorks'},
    {value: 'Ликвидация последствий террористических актов', label: 'Ликвидация последствий террористических актов', group: 'rescueWorks'},
    {value: 'Ликвидация последствий стихийных бедствий', label: 'Ликвидация последствий стихийных бедствий', group: 'rescueWorks'},
    {value: 'Откачка воды', label: 'Откачка воды', group: 'rescueWorks'},
    {value: 'Подводно-технические (водолазные работы)', label: 'Подводно-технические (водолазные работы)', group: 'rescueWorks'},
    {value: 'Оказание другой помощи населению', label: 'Оказание другой помощи населению', group: 'rescueWorks'},
    {value: 'Ликвидация последствий аварий и происшествий на водных объектах', label: 'Ликвидация последствий аварий и происшествий на водных объектах', group: 'rescueWorks'},
    {value: 'Ликвидация последствий техногенных аварий и происшествий (обрушение зданий, аварии на объектах производственной сферы и ЖКХ)', label: 'Ликвидация последствий техногенных аварий и происшествий (обрушение зданий, аварии на объектах производственной сферы и ЖКХ)', group: 'rescueWorks'},
    {value: 'Пиротехнические работы', label: 'Пиротехнические работы', group: 'rescueWorks'}
];

const fireChiefRank = [
    {value: 'РТП– помощники начальников караулов (командиры отделений)', label: 'РТП– помощники начальников караулов (командиры отделений)', group: 'fireChiefRank'},
    {value: 'РТП – начальники караулов (смен)', label: 'РТП – начальники караулов (смен)', group: 'fireChiefRank'},
    {value: 'РТП – начальники (зам.начальников) пожарных частей', label: 'РТП – начальники (зам.начальников) пожарных частей', group: 'fireChiefRank'},
    {value: 'РТП – начальники (зам.начальников) отрядов ФПС', label: 'РТП – начальники (зам.начальников) отрядов ФПС', group: 'fireChiefRank'},
    {value: 'РТП – начальники дежурных смен (старшие оперативные) служб пожаротушения', label: 'РТП – начальники дежурных смен (старшие оперативные) служб пожаротушения', group: 'fireChiefRank'},
    {value: 'РТП – начальники управлений, отделов (отделений) организации пожаротушения и проведения АСР', label: 'РТП – начальники управлений, отделов (отделений) организации пожаротушения и проведения АСР', group: 'fireChiefRank'},
    {value: 'РТП – начальники ГУ МЧС России, заместители начальников ГУ МЧС России по ГПС', label: 'РТП – начальники ГУ МЧС России, заместители начальников ГУ МЧС России по ГПС', group: 'fireChiefRank'}
];

const amountOfSmokeGroups = [
    {value: '1 звено', label: '1 звено', group: 'amountOfSmokeGroups'},
    {value: '2 звена', label: '2 звена', group: 'amountOfSmokeGroups'},
    {value: '3 и более', label: '3 и более', group: 'amountOfSmokeGroups'},
    {value: '1 звено 1 включение', label: '1 звено 1 включение', group: 'amountOfSmokeGroups'},
    {value: '1 звено 2 включение', label: '1 звено 2 включение', group: 'amountOfSmokeGroups'},
    {value: '1 звено 3 включение', label: '1 звено 3 включение', group: 'amountOfSmokeGroups'},
    {value: '2 звено 1 включение', label: '2 звено 1 включение', group: 'amountOfSmokeGroups'},
    {value: '2 звено 2 включение', label: '2 звено 2 включение', group: 'amountOfSmokeGroups'},
    {value: '2 звено 3 включение', label: '2 звено 3 включение', group: 'amountOfSmokeGroups'},
    {value: '3 звено 1 включение', label: '3 звено 1 включение', group: 'amountOfSmokeGroups'},
    {value: '3 звено 2 включение', label: '3 звено 2 включение', group: 'amountOfSmokeGroups'},
    {value: '3 звено 3 включение', label: '3 звено 3 включение', group: 'amountOfSmokeGroups'}
];

const extinguishingAgents = [
    {value: 'Пожары, ликвидированные с применением водяных стволов', label: 'Пожары, ликвидированные с применением водяных стволов', group: 'extinguishingAgents'},
    {value: 'Пожары, ликвидированные с применением пенных стволов', label: 'Пожары, ликвидированные с применением пенных стволов', group: 'extinguishingAgents'},
    {value: 'Пожары, ликвидированные с применением порошковых стволов', label: 'Пожары, ликвидированные с применением порошковых стволов', group: 'extinguishingAgents'},
    {value: 'Пожары, ликвидированные с комбинированным применением водяных, пенных или порошковых стволов', label: 'Пожары, ликвидированные с комбинированным применением водяных, пенных или порошковых стволов', group: 'extinguishingAgents'},
    {value: 'Пожары, ликвидированные с применением роботизированных установок пожаротушения', label: 'Пожары, ликвидированные с применением роботизированных установок пожаротушения', group: 'extinguishingAgents'},
    {value: 'Пожары, ликвидированные с применением огнетушителей', label: 'Пожары, ликвидированные с применением огнетушителей', group: 'extinguishingAgents'},
    {value: 'Подручные средства', label: 'Подручные средства', group: 'extinguishingAgents'},
    {value: 'Ликвидация до прибытия', label: 'Ликвидация до прибытия', group: 'extinguishingAgents'}
];

const usingHydrants = [
    {value: 'Потушено пожаров с установкой на пожарный гидрант', label: 'Потушено пожаров с установкой на пожарный гидрант', group: 'usingHydrants'},
    {value: 'Потушено пожаров с установкой на пожарный водоем', label: 'Потушено пожаров с установкой на пожарный водоем', group: 'usingHydrants'},
    {value: 'Потушено пожаров с организацией подвоза воды', label: 'Потушено пожаров с организацией подвоза воды', group: 'usingHydrants'},
    {value: 'Потушено пожаров с организацией подачи воды в перекачку', label: 'Потушено пожаров с организацией подачи воды в перекачку', group: 'usingHydrants'}
];

const locality = [
    {value: 'Город', label: 'Город', group: 'locality'},
    {value: 'Село', label: 'Село', group: 'locality'}
];

const fireRank = [
    {value: '1', label: '1', group: 'fireRank'},
    {value: '1 БИС', label: '1 БИС', group: 'fireRank'},
    {value: '2', label: '2', group: 'fireRank'},
    {value: '3', label: '3', group: 'fireRank'},
    {value: '4', label: '4', group: 'fireRank'},
];

const groupedOptions = [
    {
        label: 'Пожарные части',
        options: fireStation,
    },
    {
        label: 'Сообщение',
        options: message,
    },
    {
        label: 'Районы города',
        options: district
    },
    {
        label: 'Объект назначения',
        options: destination
    },
    {
        label: 'Где был пожар',
        options: whereWasTheFire
    },
    {
        label: 'АСР',
        options: rescueWorks
    },
    {
        label: 'РТП',
        options: fireChiefRank
    },
    {
        label: 'Работа ГДЗС',
        options: amountOfSmokeGroups
    },
    {
        label: 'Применение огнетушащих веществ',
        options: extinguishingAgents
    },
    {
        label: 'Использование ИНППВ',
        options: usingHydrants
    },
    {
        label: 'Город/Село',
        options: locality
    },
    {
        label: 'Ранг пожара',
        options: fireRank
    }
];

class ReactSelect extends React.Component {

    state = {
        fireStation: '',
        message: '',
        district: '',
        destination: '',
        whereWasTheFire: '',
        rescueWorks: '',
        fireChiefRank: '',
        amountOfSmokeGroups: '',
        extinguishingAgents: '',
        usingHydrants: '',
        locality: '',
        fireRank: ''
    };

    handleChange = (selectedOptions) => {
        this.setState({
            fireStation: selectedOptions
                .filter((e) => e.group ==='fireStation')
                .map((selectedOption) => selectedOption.value),
            message: selectedOptions
                .filter((e) => e.group === 'message')
                .map((selectedOption) => selectedOption.value),
            district: selectedOptions
                .filter((e) => e.group === 'district')
                .map((selectedOption) => selectedOption.value),
            destination: selectedOptions
                .filter((e) => e.group === 'destination')
                .map((selectedOption) => selectedOption.value),
            whereWasTheFire: selectedOptions
                .filter((e) => e.group === 'whereWasTheFire')
                .map((selectedOption) => selectedOption.value),
            rescueWorks: selectedOptions
                .filter((e) => e.group === 'rescueWorks')
                .map((selectedOption) => selectedOption.value),
            fireChiefRank: selectedOptions
                .filter((e) => e.group === 'fireChiefRank')
                .map((selectedOption) => selectedOption.value),
            amountOfSmokeGroups: selectedOptions
                .filter((e) => e.group === 'amountOfSmokeGroups')
                .map((selectedOption) => selectedOption.value),
            extinguishingAgents: selectedOptions
                .filter((e) => e.group === 'extinguishingAgents')
                .map((selectedOption) => selectedOption.value),
            usingHydrants: selectedOptions
                .filter((e) => e.group === 'usingHydrants')
                .map((selectedOption) => selectedOption.value),
            locality: selectedOptions
                .filter((e) => e.group === 'locality')
                .map((selectedOption) => selectedOption.value),
            fireRank: selectedOptions
                .filter((e) => e.group === 'fireRank')
                .map((selectedOption) => selectedOption.value)});
    };

    handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        this.props.onSubmit(this.state)
    };

    render(){
        return (
            <div className="navigation">
                <form onSubmit={this.handleFormSubmit}>
                    <Select
                        closeMenuOnSelect={false}
                        onChange={this.handleChange}
                        options={groupedOptions}
                        autoFocus={true}
                        isMulti
                    />
                    <button type="submit" className="myButton submitButton">
                        Применить
                    </button>
                </form>
            </div>
        )
    }
}

export default ReactSelect;

