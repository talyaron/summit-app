import React from 'react'
import { useState, useEffect } from 'react';
import { DB } from '../../../control/firebase/firebase';

import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";

export const MyCourse = props => {
    const { courseId } = props;

    const [courseName, setCourseName] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [instructors, setInstructors] = useState([]);
    const [dates, setDates] = useState('');

    useEffect(() => {
        const unsubscribe = DB.collection('courses').doc(`${courseId}`).onSnapshot(courseDB => {
            console.log(courseDB.data())
            setCourseName(courseDB.data().name);
            setImageSource(courseDB.data().image);
            setInstructors(courseDB.data().instructors);

            setDates(new Date(courseDB.data().dates.start.seconds * 1000).toString());
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        
            <div className="courseCard">
                <Link to={`/course/${courseId}`} >
                <img src={imageSource} alt='image source'/>
                <br></br>
                <h2 >{courseName}</h2>
                <div id="instructorAndDate">
                    <span id="date">{dates} - </span>
                    <span id="instructors">
                        {instructors.map((instructor, index) => {
                            return (<p key={index}>{instructor}</p>)
                        })}
                    </span>
                </div>
                </Link>
            </div>
        
    )
}
export default MyCourse;
