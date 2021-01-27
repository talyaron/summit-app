import React from 'react'


export const MainCourse = (props) => {

    const { course } = props;
    console.log(course.image)
   

    return (
        <div id='mainPage'>
           
                <img src={course.image} alt='course img' id='imageId' />
            
            <div id="courseName">
                <p>{course.name}</p>
            </div>
            {/* <div id="instructor">
                <p> {instructors} </p>
            </div>
            <div id="time">
                <p>{times}</p>
            </div> */}
        </div>
    )
}
export default MainCourse;
