import React from 'react'

//importing components
import InstructorCourse from '../../Components/InstructorCourse/InstructorCourse'
import StudentCourse from '../../Components/StudentCourse/StudentCourse'


export const Course = () => {
    
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
    if(student){
        return(
            <div className="studentCoursePage">
                <StudentCourse></StudentCourse>
            </div>
        )
    }
    else{
        return(
            <div className="instructorCoursePage">
                <InstructorCourse></InstructorCourse>
            </div>
        )
    }



    function studentList(){

    }
}
