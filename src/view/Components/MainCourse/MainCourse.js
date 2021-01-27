import React from 'react';
import './MainCourse.css';

export const MainCourse = (props) => {

    const { course } = props;
    console.log(course.image)
   

    return (
        <div id='mainPage'>
           
                <img src={course.image} id='imageId' />
            
            <div id="courseName">
                <p>{course.name}</p>
            </div>
            <div id="instructor">
                <p> {course.instructors} </p>
            </div>
            <div id="time">
                            {Date(course.dates.start.seconds)}
                        </div>
        </div>
    )
}
export default MainCourse;
