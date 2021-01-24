import React, { useState, useEffect } from 'react'
import './HandleCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

const courseList = DB.collection("courses")
const sortImg = "https://icon-library.com/images/icon-sort/icon-sort-18.jpg"


const HandleCourses = () => {

    const [coursesDB, setCourses] = useState([])
    useEffect(()=>{
        courseList.onSnapshot(querySnapshot=>{
          let coursesTempArray = [];
          querySnapshot.forEach(course=>{
            console.log(course.data())
            coursesTempArray.push(course.data());
            console.log(coursesTempArray)
          })
          setCourses(coursesTempArray)
        })
          
          },[])


    function AddCourse() {
        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "visible"
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("hello"+e)
        let courseName = e.target.children[0].value
        let teacherName = e.target.children[2].value
        let date = e.target.children[4].value
        let image = e.target.children[6].value
        let active = e.target.children[8].checked
        console.log(courseName, teacherName, date, image)
        DB.collection('courses').add({name: courseName, instructors: teacherName, image: image, dates: {start: date}, active: active})

        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "hidden"
    }

    function changeSortDirection(e){
        console.log(e.target.className)
        if (e.target.className=="imageUp"){
            e.target.className="imagedown"
        }
        else{
            e.target.className="imageUp"
        }
        
    }

function handleClose(e){
    let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "hidden"
}

    return (
        <div className='div'>
            <h1 style={{ textAlign: 'center' }}>Courses</h1>
<<<<<<< Updated upstream

            <img id="sortingImage" className="imageUp" onClick={changeSortDirection} src={sortImg} alt="" />
            
=======
            <div id="sortOrder">
                <img id="sortingImage" className="imageUp" onClick={changeSortDirection} src={sortImg} alt=""/>
                <span>jdjd</span>
            </div>
>>>>>>> Stashed changes
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
                    Date: <input type="datetime" />
                    <br />
                    Picture URL: <input type="text" placeholder="text here" />
                    <br />
                    Active:<input id="active" type="checkbox"/>
                    <br/>
                    <input type="submit" />
                </form>
                <button className='close' onClick={handleClose}>Close</button>
            </div>
        </div>
    )


}

export default HandleCourses