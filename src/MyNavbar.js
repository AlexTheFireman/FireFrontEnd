import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

export default function MyNavbar() {

    return (
        <Navbar bg="dark" expand="lg">
            <Nav>
                <NavLink className="nlink" to={"/file"}>Загрузить файл</NavLink>
                <NavLink className="nlink" to={"/fileList"}>Список файлов</NavLink>
            </Nav>
        </Navbar>
    )
}
