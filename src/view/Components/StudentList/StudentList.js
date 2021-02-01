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
            
                setStudents(studentsTemp);
            })
           checkCurrentClass();
            //console.log("class:", currClass)
            setCurrentClass(currClass);
            //need to check current class here and set current class
            return()=>{
                unsubscribe()
            }
        },[])

        function checkCurrentClass(){

            let EndOfCourse = new Date(new Date().getTime()+ 1000*60*60*2);
            let currentTime = new Date(new Date().getTime()- 1000*60*60*8);
           

            DB.collection('courses').doc(courseId).collection('lesson').where('time','>',currentTime).where('time','<', EndOfCourse).orderBy('time', 'desc').onSnapshot(lessonsDB=>{
                const userTables = []
                lessonsDB.forEach(lessonDB=>{
                    console.log(lessonDB.data());
                    userTables.push({...lessonDB.data(), id: lessonDB.id})
                })
                console.log(userTables)
                //set a state
            })
            return "current class";
        }

        function checkAttendance(e,student){
            console.log(student);
            console.log(e.target.checked)
            //using the id of the current class, need to add the student and their info to the lesson list

            //https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
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
                        <div className="studentImage"><img src={student.image} alt={`student ${student.name}`}/></div>
                        <div className="studentName">{student.name}</div>
                    </div>
                    <div id="attendance" className="studentAndAttendanceItem">
            <p>In Class?<input type="checkbox" className="check" onChange={e=>{checkAttendance(e,student)}} /></p>
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