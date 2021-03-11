import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import MyNavbar from './MyNavbar.js';
import File from './File.js';
import FileList from './FileList.js';
import FilteredTable from './FilteredTable';
import UserList from './UserList';
import UserForm from "./UserForm";
export default function App() {
    return (
        <BrowserRouter>
            <div>
                <MyNavbar/>
                <Switch>
                    <Route path='/file' component={File}/>
                    <Route path='/fileList' component={FileList}/>
                    <Route path='/tables/:name' component={FilteredTable}/>
                    <Route path='/userForm' component={UserForm}/>
                    <Route path='/userList' component={UserList}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


