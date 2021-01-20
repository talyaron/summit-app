import React from 'react'
import{DB} from '../../../control/firebase/firebase'
import {useState} from 'react';

export const StudentList= () =>{
    const [students, setStudents]=useState([]);

    return(
        <div className="studentList">

        </div>
    )
}