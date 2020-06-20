import React, { Component } from 'react'
import FilteredTable from './FilteredTable';

export class FilterForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            fireStation: '',
            message: '',
            fileName: props.location.param.fileName
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state) //для контроля state в консоле
        return <FilteredTable param = {this.state}/>
    }
    render(){
        const {message, fireStation} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <lable>Message </lable>
                    <select
                        value={message}
                        name="message"
                        onChange = {this.changeHandler}>
                        <option value="Пожар">Пожар</option>
                        <option value="ДТП">ДТП</option>
                        <option value="Помощь населению">Помощь населению</option>
                    </select>
                </div>
                <div>
                    <lable>FireStation </lable>
                    <select
                        value={fireStation}
                        name="fireStation"
                        onChange = {this.changeHandler}>
                        <option value="1 ПСЧ">1 ПСЧ</option>
                        <option value="2 ПСЧ">2 ПСЧ</option>
                        <option value="3 ПСЧ">3 ПСЧ</option>
                        <option value="4 ПСЧ">4 ПСЧ</option>
                        <option value="5 ПСЧ">5 ПСЧ</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FilterForm