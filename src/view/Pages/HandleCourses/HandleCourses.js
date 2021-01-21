import React, { useState } from 'react'
import './HandleCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

const courseList = DB.collection("courses")
const coursesDB = []

courseList.onSnapshot((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
        coursesDB.push({...doc.data() })
    })
    console.log(coursesDB)
 })



const HandleCourses = () => {

    function AddCourse(){
        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "visible"
    }


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
            <button className='button' onClick={AddCourse}>+</button>


            <div id="AddCourseDiv">
                <form>
                    Course Name: <input type="text" placeholder="text here"/>
                    <br/>
                    instructor's Name: <input type="text" placeholder="text here"/>
                    <br/>
                    Date: <input type="date"/>
                    <br/>
                    Picture url: <input type="text" placeholder="text here"/>
                    <br/>
                    <input type="submit"/>

                </form>
            </div>
        </div>
    )
   

}

export default HandleCourses