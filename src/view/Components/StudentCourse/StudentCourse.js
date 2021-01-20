import React from 'react'
import {useState} from 'react';
import{DB} from '../../../control/firebase/firebase'

export const StudentCourse = () => {
    //using an already made courseId for now
    let courseId='Q5U4t5de4H1YoWLYSWlu'
    function findCourse(){
        /*need some function on the course list pages that onclick
         returns the ID of the specific course document to access the specific
         course info
         */
    }

    const [courseName, setCourseName]=useState('');
    const [imageSource,setImageSource]=useState('');
    //this needs to be an array
    const [instructor, setInstructor]=useState('');
    const [dates, setDates]=useState({});
    
    DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB=>{
        setCourseName(courseDB.data().name);
        setImageSource(courseDB.data().image);
        setInstructor(courseDB.data().instructors)
    })



    return(
        <div id="studentCourse">

        </div>
    )


}

/*
function studentCourse(){
        return(
            <div className="course">
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_HxGflb-53zVTxUlG_TbBi6aPpPVoarXzQ&usqp=CAU'/>
    <p><button className="chat">chat</button> Tennis</p>
    <p> <span className="dateAndTime">Wednesday, 2:00pm - 3:00pm</span><span className="instructorName">Avi</span></p>
    <p className="notes">Bring a racket!</p>
        </div>
        )
    }
*/