import React from 'react'
import {DB} from '../../../control/firebase/firebase'
import {useState} from 'react';

export const MainCourse = () => {

    let mainId='HuSFoUk7pwu9scUAaAi0'
    function mainCourses(){
}

const [courseName, setCourseName]=useState('');
const [imageCourse, setImageCourse] = useState('');
const [instructors, setInstructors]=useState([]);
const [times, setTimes]=useState({});

DB.collection('main').doc(`${mainId}`).onSnapshot(mainDB=>{
    setCourseName(mainDB.data().name);
    setImageCourse(mainDB.data().image);
    setInstructors(mainDB.data().instructors);
    setTimes(mainDB.data().times)
})

return(
    <div id='mainPage'>
        <div id="image">
            <img src={imageCourse}></img>
    </div>
        <div id="courseName">
            <p>{courseName}</p>
        </div>
    <div id="instructor"> 
        <p> {instructors} </p>
    </div>
    <div id="time">
        <p>{times}</p>
    </div>
    </div>
)
}
export default MainCourse;
