import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function UserList () {
    const [users, setUsers] = useState([]);

    useEffect((api) => {
        fetch("/api/user/get/all")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    function deleteHandler(userName) {
        console.log('delete ' + userName);
        fetch(`/api/user/delete/${userName}`, {
            method: 'DELETE',

        }).then(() => {
            fetch("/api/user/get/all")
                .then(response => response.json())
                .then(data => {
                    setUsers(data);
                });
        });
    };

    const body = users.map((userName) => {
        return (

            <tr key={userName}>
                <td>
                    <div className="listBox">
                        <Link class="listBox1" to={`/tables/${userName}`}>{userName}</Link>
                        <button className="listBox2 myButton deleteButton"
                                onClick={() => deleteHandler(userName)}>Удалить</button>
                    </div>
                </td>
            </tr>)
    });

    return (
        <table className="table table-bordered table-sm table-hover table-striped">
            <thead className="thead-inverse">
            <tr>
                <th className="bordered">Пользователи</th>
            </tr>
            </thead>
            <tbody>
            {body}
            </tbody>
        </table>
    );
}