import './users.css';
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../control/firebase/firebase";
import {User} from '../../Components/User/User'
import {DB} from '../../../control/firebase/firebase.js';

const userList = DB.collection("users")

export function Users() {

    const [usersDB, setUsers] = useState([])
    const [filter, setFilter] = useState("none");
    useEffect(() => {
        userList.onSnapshot(querySnapshot => {
            let userListArr = [];
            querySnapshot.forEach(user => {
                let userObj = user.data();
                if (userObj.role === undefined) {
                    return;
                }
                userObj.id = user.id;
                userListArr.push(userObj);
                console.log(userListArr)
            })
            setUsers(userListArr)
        })

    }, [])

    return (
        <div>
            <div className="sort">
                <div className="dropdown2">
                    <button className="dropbtn2">{filter}</button>
                    <div className="dropdown-content2">

                        <a href="#instructor" onClick={e => {
                            e.preventDefault()
                            setFilter("instructor")
                        }} instructor>
                        </a>

                        <a href="#student" onClick={e => {
                            e.preventDefault()
                            setFilter("student")
                        }} student>
                        </a>

                        <a href="#public" onClick={e => {
                            e.preventDefault()
                            setFilter("public")
                        }} public>
                        </a>

                        <a href="#admin" onClick={e => {
                            e.preventDefault()
                            setFilter("admin")
                        }} admin>
                        </a>

                        <a href="#dateAdded" onClick={e => {
                            e.preventDefault()
                            setFilter("dateAdded")
                        }}>date added
                        </a>

                    </div>
                </div>
            </div>
            {usersDB.map(u => {
                console.log(u)
                return (<User user={u}></User>)


            })}
        </div>
    )
}
