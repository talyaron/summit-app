import React from 'react'
import { useState, useEffect } from 'react';
import { DB } from '../../../control/firebase/firebase'
import './StudentCourse.css'

export const StudentCourse = props => {

    const { courseId, user } = props;

    console.log(user)
    let studentInClass=false;


    //set useStates 
    const [courseName, setCourseName] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [instructors, setInstructors] = useState([]);
    const [dates, setDates] = useState('');
    const [joinOrLeaveClass, setJoinOrLeaveClass] = useState('');
    try {
        //collect DB data of course for useState
        useEffect(() => {
            const unsubscribe = DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB => {
                console.log(courseDB.data())
                setCourseName(courseDB.data().name);
                setImageSource(courseDB.data().image);
                setInstructors(courseDB.data().instructors);

                setDates(new Date(courseDB.data().dates.start.seconds * 1000).toDateString());
            })

            studentInClass=inClass();
            

            return () => {
                unsubscribe()
            }
        }, [])


       
        function inClass() {
            //checks if the user is in the class already
            //need user info for this
            //if not in class, setJoinOrLeaveClass to 'Join'
            //else set it to 'Leave'
            try {
                return DB.collection('users').doc(user.uid).collection('courses').doc(courseId).onSnapshot(userDB => {
                    if(userDB.exists){
                        console.log('student is registered')
                        setJoinOrLeaveClass('LEAVE')
                        return true;
                    } else {
                        console.log('student is not registered')
                        setJoinOrLeaveClass('JOIN')
                        return false;
                    }
                    
                })
            }
            catch (e) {
                console.log(e);
                return ()=>{}
            }
        }

        function goToChat() {
            //directs to the chat page with the teacher
            //needs to obtain the info of the instructor so it knows what chat to open
        }

        function joinOrLeave() {
            //if the user is in the class already, removes the course from their course list
            //if the user is not in the class, adds the course to their course list
            if(studentInClass){
                DB.collection('users').doc(user.uid).collection('courses').doc(courseId).delete();
                console.log('course deleted')
                studentInClass=false;
                setJoinOrLeaveClass('JOIN')
            }
            else{
                //this isn't working
                DB.collection('users').doc(user.uid).collection('courses').doc(courseId).set({});
                console.log('course added')
                studentInClass=true;
                setJoinOrLeaveClass('LEAVE')
            }
        }

        return (
            <div className="studentCourse">
                <img src={imageSource}></img>
                <br></br>
                <button id="chat" onClick={goToChat}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQxNYVg6CZ_oMz7pUyT01q-cDY0asFqmmNg&usqp=CAU"/></button>
                <p id="courseName">{courseName}</p>
                <div id="instructorAndDate">
                    {/*need to check how set these states */}
                    <span id="date">{dates}</span>
                    <span id="instructors">
                        {instructors.map((instructor, index) => {
                            return (<p key={index}>{instructor}</p>)
                        })}
                    </span>
                </div>
                <button className="joinOrLeave" onClick={joinOrLeave}>{joinOrLeaveClass}</button>
            </div>
        )

    } catch (e) {
        console.log(e)
    }
}

export default StudentCourse;
