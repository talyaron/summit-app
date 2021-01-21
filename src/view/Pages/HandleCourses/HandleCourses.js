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
        <div className='div'>
            <h1 style={{textAlign: 'center'}}>Courses</h1>
            {coursesDB.map((course, index) => {
                return (
                    <div className='courseBox' key={index}>
                        <div className="box2">
                            {Date(course.dates.start.seconds)}
                        </div>
                        <div className="box2">
                            Instructor: {course.instructors}
                        </div>
                        <div className="box2">
                            Course: {course.name}
                        </div>
                        <div className="box2">
                            <img className='image' src={course.image} alt={"picture of" + course.name}/>
                        </div>
                    </div>
                )
            })}
            <button className='button'>+</button>
        </div>
    )
}

export default HandleCourses