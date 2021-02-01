import React from 'react'
import{DB} from '../../../control/firebase/firebase'
import firebase from 'firebase'
import 'firebase/firestore'
import {useState, useEffect} from 'react';
import './StudentList.css'

export const StudentList= props =>{
    const {courseId}=props;
    let [students, setStudents]=useState([]);
    let [currentClasses, setCurrentClasses]=useState([]);
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
            currClass=checkCurrentClass();
            setCurrentClasses(currClass);
            console.log("currentClasses",currClass);//test
            return()=>{
                unsubscribe()
            }
        },[])

        function checkCurrentClass(){

            let EndOfCourse = new Date(new Date().getTime()+ 1000*60*60*2);
            let currentTime = new Date(new Date().getTime()- 1000*60*60*8);
            const currentLessons = []
        
            DB.collection('courses').doc(courseId).collection('lesson').where('time','>',currentTime).where('time','<', EndOfCourse).orderBy('time', 'desc').onSnapshot(lessonsDB=>{
                lessonsDB.forEach(lessonDB=>{
                    console.log(lessonDB.data());
                    currentLessons.push({... lessonDB.data(), id: lessonDB.id})
                })
            })
            return currentLessons;
        }

        function checkAttendance(e,student,currentClass){
            let inClass=e.target.checked;
            let lessonId=currentClass.id;
            let studentId=student.uid;
            if(inClass){
                DB.collection('courses').doc(courseId).collection('lesson').doc(lessonId).update({
                    participatingStudents:firebase.firestore.FieldValue.arrayUnion(studentId)
                })
            }
            else{
                DB.collection('courses').doc(courseId).collection('lesson').doc(lessonId).update({
                    participatingStudents:firebase.firestore.FieldValue.arrayRemove(studentId)
                })
            }
            

            //https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
        }

        return(
            <div className="studentList">
                {currentClasses.map((currentClass,index)=>{
                    return(<div key={index} className="currClass">
                        <div className="header">
                            <div className="headerItem">Students:</div>
                            <div className="headerItem">Attendance: {new Date(currentClass.time.seconds*1000).toString()}</div>
                        </div>
                        <div className="students">
                        {students.map((student,index)=>{
                            return (<div key={index} className="studentAndAttendance">
                                <div id="student" className="studentAndAttendanceItem">
                                    <div className="studentImage"><img src={student.image} alt={`student ${student.name}`}/></div>
                                    <div className="studentName">{student.name}</div>
                                </div>
                                <div id="attendance" className="studentAndAttendanceItem">
                                    <p>In Class?<input type="checkbox" className="check" onChange={e=>{checkAttendance(e,student,currentClass)}} /></p>
                                </div>
                            </div>)
                         })}
                        </div>
                    </div>)
                })}
            </div>
        )


    }catch(e){
        console.log(e);
    }
}
export default StudentList;