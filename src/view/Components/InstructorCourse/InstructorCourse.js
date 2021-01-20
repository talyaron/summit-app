import React from 'react'
import{DB} from '../../../control/firebase/firebase'
import {useState} from 'react';
import StudentList from '../StudentList/StudentList'

export const InstructorCourse = () => {
    //using an already made courseId for now
    let courseId='Q5U4t5de4H1YoWLYSWlu'
    function findCourse(){
        /*need some function on the course list pages that onclick
         returns the ID of the specific course document to access the specific
         course info
         */
    }

    //set useStates 
    const [courseName, setCourseName]=useState('');
    const [imageSource,setImageSource]=useState('');
    const [instructors, setInstructors]=useState([]);
    const [dates, setDates]=useState({});

    //collect DB data of course for useState
    DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB=>{
        setCourseName(courseDB.data().name);
        setImageSource(courseDB.data().image);
        setInstructors(courseDB.data().instructors);
        setDates(courseDB.data().dates);
    })


    //How should we get the input?
    function editName(){
    }

    function editImageSrc(){
    }

    function editDate(){
    }

    return(
        <div id="instructorCourse">
            <div id="image">
                <img src={imageSource}></img>
                <button className="edit" onClick={editImageSrc}>edit</button>
            </div>
            <div id="courseName">
                <p>{courseName}</p>
                <button className="edit" onClick={editName}>edit</button>
            </div>
            <div id="instructorAndDate">
                <div id="date">
                    <p>{dates}</p>
                    <button className="edit" onClick={editDate}>edit</button>
                </div>
                <div id="instructors">
                    <div>{instructors,map((instructor, index=>{
                    return(<p key={index}>{instructor}</p>)
                    }))}
                    </div>
                </div>
            </div>
            <StudentList></StudentList>
        </div>
    )

}
