import './Users.css';
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../control/firebase/firebase";
import {setUser} from "../../../control/firebase/set";

function Users() {

    let users = getUsers();
    const [filter, setFilter] = useState("none");


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
            {users.filter(u => { if(filter === "none") return true else return u.role === filter }).map(u => {
                const [role, setRole] = useState(u.role);
                <div>
                    <div className="gridHandleUsers">
                        <div className="courseNames">
                            <ul>
                                {u.courses.map(c => {
                                    <li>{c.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="wordCourse">Courses</div>
                        <div className="name"> {u.name}</div>
                        <div className="photoURL" style={{backgroundImage: "url(" + u.photoURL + ")"}}></div>
                        <div className="role">
                            <div className="dropdown"/>
                            <button className="dropbtn">{role}</button>
                            <div className="dropdown-content">
                                <a href="#instructor" onClick={e => {
                                    e.preventDefault()
                                    setRole("instructor")
                                    u.role = "instrutor";
                                    setUser(u);
                                }}>instructor</a>
                                <a href="#student" onClick={e => {
                                    e.preventDefault()
                                    setRole("student")
                                    u.role = "student";
                                    setUser(u);

                                }}>student</a>
                                <a href="#public" onClick={e => {
                                    e.preventDefault()
                                    setRole("public")
                                    u.role = "public";
                                    setUser(u);

                                }}>public</a>
                                <a href="#admin" onClick={e => {
                                    e.preventDefault()
                                    setRole("admin")
                                    u.role = "admin";
                                    setUser(u);
                                }}>admin</a>
                            </div>
                        </div>
                    </div>
                </div>

            })}
        </div>
    )
}
