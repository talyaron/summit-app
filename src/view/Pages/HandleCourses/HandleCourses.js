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
            <h1 style={{textAlign: 'center'}}>Courses</h1>
            <div>
                <select name="cars" id="cars" multiple>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
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
            <br/>
            <button className='button'>+</button>
        </div>
    )
}

export default HandleCourses