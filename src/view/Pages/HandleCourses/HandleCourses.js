import React, { useState, useEffect } from 'react'
import './HandleCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

//components
import Picture from '../../Components/Picture/Picture';

const courseList = DB.collection("courses")
const sortImg = "https://icon-library.com/images/icon-sort/icon-sort-18.jpg"


const HandleCourses = () => {

    const [coursesDB, setCourses] = useState([])
    useEffect(() => {
        courseList.onSnapshot(querySnapshot => {
            let coursesTempArray = [];
            querySnapshot.forEach(course => {
                let courseObj = course.data();
                courseObj.id = course.id;
                coursesTempArray.push(courseObj);
                console.log(coursesTempArray)
            })
            setCourses(coursesTempArray)
        })

    }, [])


    function AddCourse() {
        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "visible"
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("hello" + e)
        let courseName = e.target.children[0].value
        let teacherName = e.target.children[2].value
        let date = new Date(e.target.children[4].value)
        let image = e.target.children[6].value
        let active = e.target.children[8].checked
        console.log(courseName, teacherName, date, image)
        DB.collection('courses').add({ name: courseName, instructors: teacherName, image: image, dates: { start: date }, active: active })

        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "hidden"
    }

    function changeSortDirection(e) {

        let coursesT = [...coursesDB];



        if (e.target.className === "imageUp") {
            e.target.className = "imagedown";
            coursesT.sort((a, b) => a.dates.start - b.dates.start);

        }
        else {
            e.target.className = "imageUp";
            coursesT.sort((a, b) => b.dates.start - a.dates.start);
        }


        setCourses(coursesT)


    }

    function handleClose(e) {
        let addingForm = document.getElementById("AddCourseDiv")
        addingForm.style.visibility = "hidden"
    }

    /*function handleDelete(e){
        console.log(e)
    }*/

    return (
        <div className='handleCoursesWrap'>
            <h1 >חוגים</h1>


            <img id="sortingImage" className="imageUp" onClick={changeSortDirection} src={sortImg} alt="" />



            {coursesDB.map((course, index) => {
                console.log(course)
                return (
                        <div className='courseBox' key={index}>
                            <div className="box2" >
                                <h2 id="courseDate"> {new Date(course.dates.start.seconds * 1000).toString()}</h2>
                            </div>
                            <div className="box2">
                                <h2> מדריכ\ה: {course.instructors}</h2>
                            </div>
                            <div className="box2">
                                <h2> חוג: {course.name}</h2>
                            </div>
                            <div className="box2">
                                <Picture id={course.id} image={course.image} name={course.name} />
                            </div>
                            <button  onClick={() => {

                                if (window.confirm("האם אתם בטוחים שאתם רוצים למחוק את הקורס?")) {
                                    DB.collection('courses').doc(course.id).delete()
                                        .then(() => { console.info(`Course with id ${course.id} was deleted`) })
                                }


                            }}>מחק</button>
                        </div>
                )
            })}
            <button className='button' onClick={AddCourse}>+</button>


            <div id="AddCourseDiv">
                <form onSubmit={handleSubmit}>
                    שם חוג: <input type="text" placeholder="רשום טקסט" />
                    <br />
                    שם מדריכ/ה: <input type="text" placeholder="רשום טקסט" />
                    <br />
                    תאריך: <input type="datetime-local" />
                    <br />
                    כתובת תמונה: <input type="text" placeholder="רשום טקסט" />
                    <br />
                    <input type="submit" />
                </form>
                <button className='close' onClick={handleClose}>סגור</button>
            </div>
            </div>
    )


}

export default HandleCourses