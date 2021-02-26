import React, {useState} from 'react';
import './App.css';

export default function UserForm() {

        const[form, setState] = useState({
            username: '',
            email: '',
            password: ''
        });


    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        fetch('/api/user/add', {
            method: 'POST',
            body: JSON.stringify(form),

            headers: {'Content-Type': 'application/json'}
        })
            .then(data => data.json())
    };

    return (
        <form className="userForm" onSubmit={handleFormSubmit}>
            <h4>Для создания пользователя заполните поля</h4>
            <div>
                <h5>Имя</h5>
                <input value={form.username} name="username" type="text" onChange={updateField}/>
            </div>
            <div>
                <h5>Адрес электронной почты</h5>
                <input value={form.email} name="email" type="email" onChange={updateField}/>
            </div>
            <div>
                <h5>Пароль</h5>
                <input value={form.password} name="password" type="password" onChange={updateField}/>
            </div>
            <div className="subButton">
                <button type="submit">Создать пользователя</button>
            </div>
        </form>
    )
}