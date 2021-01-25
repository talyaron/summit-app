import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { DB } from '../../../control/firebase/firebase';

//importing components
import InstructorCourse from '../../Components/InstructorCourse/InstructorCourse'
import StudentCourse from '../../Components/StudentCourse/StudentCourse'


export const Course = () => {

    let { courseId } = useParams();

    const [user, setUser] = useState({})
    const [userRole, setUserRole] = useState('student')

    useEffect(() => {
        getUser();
        
    }, [])

    console.log(courseId)

    function getUser() {

        const tmpUser = JSON.parse(sessionStorage.getItem('user'))

        console.log(tmpUser)


        if (tmpUser) {
            DB.collection('users').doc(tmpUser.uid).get()
                .then(userDB => {
                    if (userDB.exists) {
                        console.log(userDB.data())
                        setUser(userDB.data())
                        //set user role
                        if(userDB.data().role){
                            setUserRole(userDB.data().role)
                        } else {
                            //redirect to login
                        }
                    }
                })
        }


    }
    if (userRole === 'student') {
        return (
            <div className="studentCoursePage">
                STUDENT
                <StudentCourse courseId={courseId} user={user}></StudentCourse>
            </div>
        )
    }
    else if(userRole === 'instructor' || userRole === 'admin') {
        return (
            <div className="instructorCoursePage">
                <InstructorCourse courseId={courseId} user={user}></InstructorCourse>
            </div>
        )
    } else {
        return null
    }

}

export default Course;
