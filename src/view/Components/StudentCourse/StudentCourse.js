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

    //set useStates 
    const [courseName, setCourseName]=useState('');
    const [imageSource,setImageSource]=useState('');
    const [instructors, setInstructors]=useState([]);
    const [dates, setDates]=useState({});
    const [joinOrLeaveClass, setJoinOrLeaveClass]=useState('Join');
    
    //collect DB data of course for useState
    DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB=>{
        setCourseName(courseDB.data().name);
        setImageSource(courseDB.data().image);
        setInstructors(courseDB.data().instructors);
        setDates(courseDB.data().dates);
    })

    function inClass(){
        //checks if the user is in the class already
        //need user info for this
        //if not in class, setJoinOrLeaveClass to 'Join'
        //else set it to 'Leave'
    }

    function goToChat(){
        //directs to the chat page with the teacher
        //needs to obtain the info of the instructor so it knows what chat to open
    }
    
    function joinOrLeave(){
        //if the user is in the class already, removes the course from their course list
        //if the user is not in the class, adds the course to their course list
    }

    return(
        <div id="studentCourse">
            <img src={imageSource}></img>
            <p id="courseName">{courseName}</p>
            <button id="chat" onClick={goToChat}>Chat</button>
            <p id="instructorAndDate">
                {/*need to check how set these states */}
                <span id="date">{dates}</span>
                <span id="instructors">{instructors,map((instructor, index=>{
                    return(<p key={index}>{instructor}</p>)
                }))}
                </span>
            </p>
            <button id="joinOrLeave" onClick={joinOrLeave}>{joinOrLeaveClass}</button>  
        </div>
    )


}
