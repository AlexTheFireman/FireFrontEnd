import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import MyNavbar from './MyNavbar.js';
import File from './File.js';
import BigTable from './BigTable.js';
import FileList from './FileList.js';
import POSTTable from './POSTTable.js';
import FilterForm from './FilterForm.js';
import FilteredTable from './FilteredTable';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <MyNavbar/>
               <Switch>
                    <Route path='/filterForm' component={FilterForm}/>
                    <Route path='/file' component={File}/>
                    <Route path='/tables/:name' component={POSTTable}/>
                    <Route path='/big' component={BigTable}/>
                    <Route path='/fileList' component={FileList}/>
                    <Route path='/tables/:name' component={FilteredTable}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


