import React from 'react';
import './Courses.css';
import React, { useEffect, useState } from 'react';
import {getUsers} from "../../../control/firebase/firebase";

function Users () {

    let users = getUsers();

    let myCourses = [basketball, swimming]

    return (
        <div>
{
        users.map(User => {
            return (<div> <p>{User.courses}</p>
                <p>Courses</p> <p>{User.name}</p> <p>{User.role}</p> <img src={User.photoURL}></img> </div>) //So technically, we need a css framework to do a drop down and/or proper spacing. We don't have one, so we aren't doing it yet.
        })
      }
        </div>
    )
}