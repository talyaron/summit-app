import React from 'react';
import './MyCourses.css';
import { DB } from '../../../control/firebase/firebase'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MyCourse from '../../Components/MyCourse/MyCourse';
import { useHistory } from "react-router"

let MyCourses = function () {
    const [user, setUser] = useState({})
    const [classes, setClasses] = useState([])
    let userInfo;
    const history = useHistory();

    useEffect(() => {
        getUserAndCourses();

    }, [])


    function getUserAndCourses() {
        const tmpUser = JSON.parse(sessionStorage.getItem('user'))

        console.log(tmpUser)
        if (tmpUser) {
            DB.collection('users').doc(tmpUser.uid).get()
                .then(userDB => {
                    if (userDB.exists) {
                        //console.log(userDB.data())
                        //userInfo=userDB.data;
                        setUser(userDB.data())


                        let userId = userDB.id

                        DB.collection('users').doc(userId).collection('courses').onSnapshot(coursesDB => {

                            const coursesTemp = [];

                            coursesDB.forEach(courseDB => {
                                let course = courseDB.id;
                                coursesTemp.push(course);
                            })

                            if (coursesTemp.length === 0) {
                                history.push('/MainCourses')
                            } else {
                                console.log(coursesTemp)
                                setClasses(coursesTemp);
                            }
                        })

                    }
                })
            return tmpUser
        } else {
            history.push("/login")
        }

    }


    return (
        <div className="wrapper">
            <h1 id='title'>My Courses</h1>
            {classes.map((myClass, index) => {
                return (<div key={index} >
                    <MyCourse courseId={myClass} />
                </div>)
            })}

        </div>
    )

}




export default MyCourses;