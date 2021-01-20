import React, { useState } from 'react'
import './HandleCourses.css';
import { DB } from '../../../control/firebase/firebase.js';

const courseList = DB.collection("courses")
const coursesDB = []

courseList.get().then((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
        coursesDB.push({...doc.data() })
    })
    console.log(coursesDB)
 })



/*const coursesDB = [{
    name: 'Basketball',
    instructors: ['Tal Yaron'],
    date: {
        starting: '2/7',
        end: '3/7',
        repeat: [
            { days: 1, hoursStart: '12:40', hoursEnd: '15:00' } //the hours should be in date format
        ],
    },
    image: 'https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dwd21974bc/images/hi-res/74876E_FRONT.jpg?sw=555&sh=689&sm=cut&sfrm=jpg',

    students: [{
        name: 'Nil',
        surname: 'Armstrong',
        email: 'nil@moon.com',
        phone: 'string',
        userId: 'string',
        courses: [],
        role: 'student'
    }
    ],
    active: true,
    center: 'sport'
},
{
    name: 'Tennis',
    instructors: ['Jacob Karlovsky'],
    date: {
        starting: '2/8',
        end: '3/8',
        repeat: [
            { days: 1, hoursStart: '12:40', hoursEnd: '15:00' } //the hours should be in date format
        ],
    },
    image: 'https://www.pandapets.co.il/images/shop/product/tennis%20ball.jpg',
    students: [{
        name: 'Nil',
        surname: 'Armstrong',
        email: 'nil@moon.com',
        phone: 'string',
        userId: 'string',
        courses: [],
        role: 'student'
    }
    ],
    active: true,
    center: 'sport'
}]*/



const HandleCourses = () => {


    return (
        <div>
            
            {coursesDB.map((course, index) => {
                return (
                    <div className='course' key={index}>
                        {course.name}
                        <br/>
                        {course.instructors}
<<<<<<< HEAD
                        <br/>
                        {course.date.starting}-{course.date.end}
                        <br />
                        {course.date.repeat[0].hoursStart}-{course.date.repeat[0].hoursEnd}
=======
>>>>>>> dev
                        <br/>
                        <img class='image' src={course.image} alt={"picture of" + course.name}/>
                    </div>
                )
            })}
        </div>
    )
}

export default HandleCourses