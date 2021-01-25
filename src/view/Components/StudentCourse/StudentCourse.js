import React from 'react'
import { useState, useEffect } from 'react';
import { DB } from '../../../control/firebase/firebase'
import './StudentCourse.css'

export const StudentCourse = props => {


    //using an already made courseId for now
    const { courseId } = props;

    console.log(courseId)
    function findCourse() {
        /*need some function on the course list pages that onclick
         returns the ID of the specific course document to access the specific
         course info
         */
    }

    //set useStates 
    const [courseName, setCourseName] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [instructors, setInstructors] = useState([]);
    const [dates, setDates] = useState('');
    const [joinOrLeaveClass, setJoinOrLeaveClass] = useState('Join');
    try {
        //collect DB data of course for useState
        useEffect(() => {
            const unsubscribe = DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB => {
                console.log(courseDB.data())
                setCourseName(courseDB.data().name);
                setImageSource(courseDB.data().image);
                setInstructors(courseDB.data().instructors);

                if (typeof courseDB.data().dates.start.seconds === 'number') {

                    setDates(courseDB.data().dates.start.seconds * 1000);
                }
            })

            return () => {
                unsubscribe()
            }
        }, [])


        function inClass() {
            //checks if the user is in the class already
            //need user info for this
            //if not in class, setJoinOrLeaveClass to 'Join'
            //else set it to 'Leave'
        }

        function goToChat() {
            //directs to the chat page with the teacher
            //needs to obtain the info of the instructor so it knows what chat to open
        }

        function joinOrLeave() {
            //if the user is in the class already, removes the course from their course list
            //if the user is not in the class, adds the course to their course list
        }

        return (
            <div id="studentCourse">
                <img src={imageSource}></img>
                <p id="courseName">{courseName}</p>
                <button id="chat" onClick={goToChat}>Chat</button>
                <p id="instructorAndDate">
                    {/*need to check how set these states */}
                    <span id="date">{dates}</span>
                    {/* <span id="instructors">{instructors.map((instructor, index=>{
                    return(<p key={index}>{instructor}</p>)
                }))}
                </span> */}
                </p>
                <button id="joinOrLeave" onClick={joinOrLeave}>{joinOrLeaveClass}</button>
            </div>
        )

    } catch (e) {
        console.log(e)
    }
}

export default StudentCourse;
