import React from 'react'
import Select from 'react-select';

const fireStations = [
    { value: '1 ПСЧ', label: '1 ПСЧ', group: 'stations'},
    { value: '2 ПСЧ', label: '2 ПСЧ', group: 'stations'},
    { value: '3 ПСЧ', label: '3 ПСЧ', group: 'stations'},
    { value: '4 ПСЧ', label: '4 ПСЧ', group: 'stations'},
    { value: '5 ПСЧ', label: '5 ПСЧ', group: 'stations'},
    { value: '6 ПСЧ', label: '6 ПСЧ', group: 'stations'},

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

const groupedOptions = [
    {
        label: 'Пожарные части',
        options: fireStations,
    },
    {
        label: 'Сообщение',
        options: message,
    },
    { label: 'Районы города',
        options: district
    },
    {
        label: 'Объект назначения',
        options: destination
    },
    {
        label: 'Где был пожар',
        options: whereWasTheFire
    }
];

class ReactSelect extends React.Component {

    state = {
        fireStation: '',
        message: '',
        district: '',
        destination: '',
        whereWasTheFire: ''
    }

    handleChange = (selectedOptions) => {
        this.setState({ fireStation: selectedOptions
                .filter((e) => e.group ==='stations')
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
                .map((selectedOption) => selectedOption.value)});
    }

    handleFormSubmit = submitEvent => {
        submitEvent.preventDefault()
        this.props.onSubmit(this.state)
    }
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