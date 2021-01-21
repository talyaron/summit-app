import React from 'react'
import { useParams } from "react-router-dom";

//importing components
// import InstructorCourse from '../../Components/InstructorCourse/InstructorCourse'
import StudentCourse from '../../Components/StudentCourse/StudentCourse'


export const Course = () => {

    let {courseId} = useParams();

    console.log(courseId)
    
    function checkUser(){
        //checks to see if the user is a student or instructor
        //if student
        //call studentCourse
        //if instructor
        //call instructorCourse
        //call studentList
        let student=true;
        return student;
    }
    if(true){
        return(
            <div className="studentCoursePage">
                STUDENT
                <StudentCourse courseId={courseId}></StudentCourse>
            </div>
        )
    }
    else{
        return(
            <div className="instructorCoursePage">
                {/* <InstructorCourse courseId={courseId}></InstructorCourse> */}
            </div>
        )
    }

}

export default Course;
