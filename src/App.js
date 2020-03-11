import React from "react";
import './App.css';

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { MyNavbar } from './MyNavbar.js';
import { File } from './File.js';
import { Tables } from './Tables';


export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <MyNavbar/>
                <Switch>
                    <Route path='/file' component={File}/>
                    <Route path='/tables' component={Tables}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


