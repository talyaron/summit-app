import React from 'react';
import './MainCourse.css';

import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";

export const MainCourse = (props) => {

    const { course } = props;
    console.log(course)
   

    return (
        <div className='courseCard'>
           <Link to={`/course/${course.courseId}`} >
                <img src={course.image} id='imageId' />
                <br></br>
         
                <h2>{course.name}</h2>
           
            <div id="instructor">
                 {course.instructors.map((instructor,index)=>{
                    return(<p key={index}>{instructor}</p>)
                })} 
            </div>
            <div id="time">
                            {Date(course.dates.start.seconds)}
                        </div>
                        </Link>
        </div>
    )
}
export default MainCourse;
