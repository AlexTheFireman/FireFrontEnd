import React, {useState} from 'react';
import './login.css';

export default function LoginForm() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(data => data.json())
    };

    return (
        <div className="login-wrap">
            <h1>Введите логин и пароль для входа</h1>
            <form onSubmit={handleSubmit}>
                <div className="login">
                  <input type="text" placeholder="Ваш логин" required autoFocus
                         onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="pass">
                    <input type="password" placeholder="Ваш пароль" required
                         onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="subButton">
                    <button type="submit">Войти</button>
                </div>
            </form>
        </div>
    )

}