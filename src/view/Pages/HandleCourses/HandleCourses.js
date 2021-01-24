import React, { useState } from 'react'
import './HandleCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

const courseList = DB.collection("courses")
const coursesDB = []

courseList.onSnapshot((querySnapshot) => {

    querySnapshot.forEach((doc) => {
        coursesDB.push({ ...doc.data() })
    })
    console.log(coursesDB)
})



const HandleCourses = () => {

    function AddCourse() {
        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "visible"
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        let input1 = e.target.children[0].value
        let input2 = e.target.children[1].value
        let input3 = e.target.children[2].value
        let input4 = e.target.children[3].value
        DB.collection('courses').add({input1, input2, input3, input4})
    }

    return (
        <div className='div'>
            <h1 style={{ textAlign: 'center' }}>Courses</h1>
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
                            <img className='image' src={course.image} alt={"picture of" + course.name} />
                        </div>
                    </div>
                )
            })}
            <button className='button' onClick={AddCourse}>+</button>


            <div id="AddCourseDiv">
                <form onSubmit={handleSubmit}>
                    Course Name: <input type="text" placeholder="text here" />
                    <br />
                    Instructor's Name: <input type="text" placeholder="text here" />
                    <br />
                    Date: <input type="date" />
                    <br />
                    Picture URL: <input type="text" placeholder="text here" />
                    <br />
                    <input type="submit" />

                </form>
            </div>
        </div>
    )


}

export default HandleCourses