import React, {useEffect, useState} from 'react';
import './MainCourses.css';
import { DB } from '../../../control/firebase/firebase.js';
import { useParams } from "react-router-dom";


import MainCourse from '../../Components/MainCourse/MainCourse'




export const MainCourseList = () => {
   
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        let unsubscribe = listenToAllCourses(setCourseList);
        return () => {
            unsubscribe()
        }
    }, [])

  
    return (
        <div className="wrapper">
                <h1>כל החוגים</h1>
          
            
            {courseList.map((course, index) => {
                return (<MainCourse key={index} course={course}></MainCourse>)
            })}
          
        </div>

    )

}
export default MainCourseList;

function listenToAllCourses(setCoursesList) {
   return  DB.collection("courses").onSnapshot(coursesDB=>{
       const coursesTemp =[];
        coursesDB.forEach(courseDB=>{
            const courseObj = courseDB.data();
            courseObj.courseId = courseDB.id;
            if({}.hasOwnProperty.call(courseObj, 'instructors') ){
                if(typeof courseObj.instructors === 'string'){
                    console.log(courseObj)
                    courseObj.instructors=[]; 
                   
                } 
            }
            coursesTemp.push(courseObj)
        })
        setCoursesList(coursesTemp)
    })
}

