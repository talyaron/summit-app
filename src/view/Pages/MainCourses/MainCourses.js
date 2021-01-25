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
        <div>
            <div className='mainCourses'>
                <h1>Main Courses</h1>
            </div>
            <div className="mainCoursePage"> all courses
            {courseList.map((course, index) => {
                return (<MainCourse key={index} course={course}></MainCourse>)
            })}

            </div>
        </div>

    )

}
export default MainCourseList;

function listenToAllCourses(setCourserList) {
   return  DB.collection("courses").onSnapshot(coursesDB=>{
       const coursesTemp =[];
        coursesDB.forEach(courseDB=>{
            const courseObj = courseDB.data();
            courseObj.courseId = courseDB.id;
            coursesTemp.push(courseObj)
        })
        setCourserList(coursesTemp)
    })
}

