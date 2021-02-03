import React from 'react';
import './MyCourses.css';
import {DB} from '../../../control/firebase/firebase'
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import MyCourse from '../../Components/MyCourse/MyCourse';
import { useHistory } from "react-router"

let MyCourses = function (){
    const [user, setUser] = useState({})
    const [classes, setClasses]=useState([])
    let userInfo;
    const history = useHistory();

    useEffect(() => {
        const userObj  = getUser();
        let coursesTemp=[];
        const unsubscribe=DB.collection('users').doc(userObj.uid).collection('courses').onSnapshot(coursesDB=>{
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

    
    function getUser() {
        const tmpUser = JSON.parse(sessionStorage.getItem('user'))
       
        console.log(tmpUser)
        if (tmpUser) {
            DB.collection('users').doc(tmpUser.uid).get()
                .then(userDB => {
                    if (userDB.exists) {
                        //console.log(userDB.data())
                        //userInfo=userDB.data;
                        setUser(userDB.data())
                        setUser(userDB)
                        
                    }
                })
                return tmpUser
        } else{
            history.push("/login")
        }

    }


    return(
        <div className="wrapper">
           <div id='title'>My Courses</div> 
            {classes.map((myClass,index)=>{
                return(<div key={index} className="myClass">
                    <MyCourse  courseId={myClass}/>
                </div>)
            })}

        </div>
    )

}




export default MyCourses;