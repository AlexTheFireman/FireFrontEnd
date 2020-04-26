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
import  Table  from './Table.js';
import BigTable from './BigTable';
import FileList from './FileList';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <MyNavbar/>
               <Switch>
                    <Route exact path='/file' component={File}/>
                    <Route path='/tables' component={Table}/>
                    <Route path='/big' component={BigTable}/>
                    <Route path='/fileList' component={FileList}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


