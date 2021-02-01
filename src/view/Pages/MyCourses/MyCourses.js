import React from 'react';
import './MyCourses.css';
import {DB} from '../../../control/firebase/firebase'
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import MyCourse from '../../Components/MyCourse/MyCourse'

let MyCourses = function (){
    const [user, setUser] = useState({})
    const [classes, setClasses]=useState([])
    let userInfo;

    useEffect(() => {
        //getUser();
        let coursesTemp=[];
        const unsubscribe=DB.collection('users').doc('pKH7vXjeO8eQ1C8tY4iRnhdFAcr1').collection('courses').onSnapshot(coursesDB=>{
            coursesDB.forEach(courseDB=>{
                let course=courseDB.id;
                coursesTemp.push(course);
            })
            console.log(coursesTemp)
            setClasses(coursesTemp);
        })
        return()=>{
            unsubscribe()
        }

    }, [])

    /*
    function getUser() {
        const tmpUser = JSON.parse(sessionStorage.getItem('user'))
        let user;
        console.log(tmpUser)
        if (tmpUser) {
            DB.collection('users').doc(tmpUser.uid).get()
                .then(userDB => {
                    if (userDB.exists) {
                        //console.log(userDB.data())
                        //userInfo=userDB.data;
                        setUser(userDB.data())
                        
                    }
                })
        }

    }*/


    return(
        <div className="myCourses">
            My Courses
            {classes.map((myClass,index)=>{
                return(<div key={index} className="myClass">
                    <MyCourse  courseId={myClass}/>
                </div>)
            })}
        </div>
    )

}




export default MyCourses;