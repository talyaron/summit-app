import React, { useState } from 'react'
import './HandleCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

const courseList = DB.collection("courses")
const coursesDB = []

courseList.get().then((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
        coursesDB.push({...doc.data() })
    })
    console.log(coursesDB)
 })
 

const HandleCourses = () => {


    return (
        <div>
            
            {coursesDB.map((course, index) => {
                return (
                    <div className='course' key={index}>
                        {course.name}
                        <br/>
                        {course.instructors}
                        <br/>
                        {Date(course.dates.start.seconds)}
                        <br/>
                        <img class='image' src={course.image} alt={"picture of" + course.name}/>
                    </div>
                )
            })}
        </div>
    )
}

export default HandleCourses