import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { MyNavbar } from './MyNavbar.js';
import { File } from './File.js';
import BigTable from './BigTable';
import FileList from './FileList';
import Table from "./Table";


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <MyNavbar/>
               <Switch>
                    <Route path='/file' component={File}/>
                    <Route path='/tables/:name' component={Table}/>
                    <Route path='/big' component={BigTable}/>
                    <Route path='/fileList' component={FileList}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


