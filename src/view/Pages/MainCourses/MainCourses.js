import React from 'react';
import './MainCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

const mainCourseList = DB.collection("mainCourses")
const mainCoursesDB = [];

function mainCourses() {
    return(
        <div className='mainCourses'>
            <h1>Main Courses</h1>
        </div>
    )
}

    export default MainCourses;
    
