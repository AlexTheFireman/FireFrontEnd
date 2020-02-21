import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export class MyNavbar extends Component {
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse is="basic-navbar-nav"/>
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to={"/file"}>File</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to={"/tables"}>Tables</NavLink>
                    </Nav>
            </Navbar>
        )
    }
}