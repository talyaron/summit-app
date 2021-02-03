import React from 'react';
import './MainCourse.css';

import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";

export const MainCourse = (props) => {

    const { course } = props;
    console.log(course.image)
   

    return (
        <div className='courseCard'>
           <Link to={`/course/${course}`} >
                <img src={course.image} id='imageId' />
            
         
                <h2>{course.name}</h2>
           
            <div id="instructor">
                <p> {course.instructors} </p>
            </div>
            <div id="time">
                            {Date(course.dates.start.seconds)}
                        </div>
                        </Link>
        </div>
    )
}
export default MainCourse;
