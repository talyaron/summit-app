import React from 'react'
import{DB} from '../../../control/firebase/firebase'
import {useState, useEffect} from 'react';
// import StudentList from '../StudentList/StudentList'
//import instructor course css

export const InstructorCourse = props => {
    //using an already made courseId for now
    
    const {courseId}=props;
    console.log(courseId);
   

    //set useStates 
    const [courseName, setCourseName]=useState('');
    const [imageSource,setImageSource]=useState('');
    const [instructors, setInstructors]=useState([]);
    const [dates, setDates]=useState('');

    //collect DB data of course for useState
    try{
        useEffect(()=>{
            const unsubscribe=DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB=>{
                console.log(courseDB.data())
                setCourseName(courseDB.data().name);
                setImageSource(courseDB.data().image);
                setInstructors(courseDB.data().instructors);
                
                if(typeof courseDB.data().dates.start.seconds==='number'){
                    setDates(courseDB.data().dates.start.seconds*1000);
                }
            })
            return ()=>{
                unsubscribe()
            }
        },[])
    
    
        


    //How should we get the input?
    function editName(){
    }

    function editImageSrc(){
    }

    function editDate(){
    }

    return(
        <div id="instructorCourse">
            <div id="image">
                <img src={imageSource}></img>
                <button className="edit" onClick={editImageSrc}>edit</button>
            </div>
            <div id="courseName">
                <p>{courseName}</p>
                <button className="edit" onClick={editName}>edit</button>
            </div>
            <div id="instructorAndDate">
                <div id="date">
                    <p>{dates}</p>
                    <button className="edit" onClick={editDate}>edit</button>
                </div>
                <div id="instructors">
                    {/* <div>{instructors.map((instructor, index=>{
                    return(<p key={index}>{instructor}</p>)
                    }))}
                    </div> */}
                </div>
            </div>
            {/* <StudentList></StudentList> */}
        </div>
    )
     }catch(e){
        console.log(e)
    }
}

export default InstructorCourse;
