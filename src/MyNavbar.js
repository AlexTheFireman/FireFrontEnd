import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function MyNavbar () {
    function logout(event) {
        event.preventDefault();
        fetch('/api/logout', {
            method: 'POST',
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {console.log(response)})


    }

    return(
        <Navbar bg="dark" expand="lg">
            <Nav>
                <NavLink className="nlink" to={"/file"}>Загрузить файл</NavLink>
                <NavLink className="nlink" to={"/fileList"}>Список файлов</NavLink>
                <NavLink className="nlink" to={"/userForm"}>Данные пользователя</NavLink>
                <button type="button" onClick = {logout}>Logout Button</button>
            </Nav>
        </Navbar>
    )
}
