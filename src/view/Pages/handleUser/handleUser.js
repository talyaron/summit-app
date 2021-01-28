import './Users.css';
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../control/firebase/firebase";
import {setUser} from "../../../control/firebase/set";

function Users() {

    let users = getUsers();


    return (
        users.map(u => {
            const [role, setRole] = useState(u.role);
            <div>
                {/*
                <div className="sort">
                    <div className="dropdown2">
                        <button className="dropbtn2">name</button>
                        <div className="dropdown-content2">
                            <a href="#">instructor</a>
                            <a href="#">title</a>
                            <a href="#">name</a>
                            <a href="#">date added</a>
                        </div>
                    </div>
                </div>
                */}
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
        })
    )
}
