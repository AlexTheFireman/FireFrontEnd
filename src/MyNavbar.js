import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function MyNavbar () {

    return(
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse is="basic-navbar-nav"/>
            <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to={"/file"}>Загрузить файл</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to={"/fileList"}>Список файлов</NavLink>
            </Nav>
        </Navbar>
    )
}
