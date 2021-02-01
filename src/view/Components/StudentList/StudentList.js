import React from 'react'
import{DB} from '../../../control/firebase/firebase'
import {useState, useEffect} from 'react';
import './StudentList.css'

export const StudentList= props =>{
    const {courseId}=props;
    let [students, setStudents]=useState([]);
    let [currentClass, setCurrentClass]=useState('');
    let currClass;

    try{
        useEffect(()=>{
            let studentsTemp=[];
            const unsubscribe=DB.collection('courses').doc(courseId).collection('students').onSnapshot(studentsDB=>{
                studentsDB.forEach(studentDB=>{
                    let studentObj={name:studentDB.data().name, image:studentDB.data().image, uid:studentDB.id};
                    studentsTemp.push(studentObj);
                })
                console.log(studentsTemp);
                setStudents(studentsTemp);
            })
            currClass=checkCurrentClass();
            //console.log("class:", currClass)
            setCurrentClass(currClass);
            //need to check current class here and set current class
            return()=>{
                unsubscribe()
            }
        },[])

        function checkCurrentClass(){
            DB.collection('courses').doc(courseId).collection('lesson').onSnapshot(lessonsDB=>{
                //need to figure out which lesson is the most recent lesson
                //return that lesson ID as the current class
                //for now:
            })
            return "current class";
        }

        function checkAttendance(student){
            console.log(student);
            //using the id of the current class, need to add the student and their info to the lesson list
        }

    return(
        <div className="studentList">
            <div className="header">
                <div className="headerItem">Students:</div>
                 <div className="headerItem">Attendance: {currentClass}</div>
            </div>
            <div className="students">
            {students.map((student,index)=>{
                return (<div key={index} className="studentAndAttendance">
                    <div id="student" className="studentAndAttendanceItem">
                        <div className="studentImage"><img src={student.image}/></div>
                        <div className="studentName">{student.name}</div>
                    </div>
                    <div id="attendance" className="studentAndAttendanceItem">
            <p>In Class?<input type="checkbox" className="check" /></p>
            {/* If the check box is checked I want it to call this function {checkAttendance(student)} */}
                    </div>
                </div>)
            })}
            </div>
        </div>
    )
    }catch(e){
        console.log(e);
    }
}
export default StudentList;