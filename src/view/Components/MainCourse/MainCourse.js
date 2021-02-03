import React from 'react';
import './MainCourse.css';

export const MainCourse = (props) => {

    const { course } = props;
    console.log(course.image)
   

    return (
        <div className='courseCard'>
           
                <img src={course.image} id='imageId' />
            
         
                <h2>{course.name}</h2>
           
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
