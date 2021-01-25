import React from 'react';
import './MainCourses.css';
import { DB } from '../../../control/firebase/firebase.js';
import { useParams } from "react-router-dom";

import MainCourse from '../../Components/MainCourse/MainCourse'

const mainCourseList = DB.collection("mainCourses")
const mainCoursesDB = [];

export const MainCourseList = () => {
let {mainId} = useParams();
console.log(mainId)

let MainCourses = function (){
    return(
        <div>
        <div className='mainCourses'>
            <h1>Main Courses</h1>
        </div>
        <div className="mainCoursePage"> all courses
        <MainCourse courseId={mainId}></MainCourse> </div>
        </div>
        
    )
    }
}
    export default MainCourseList;
