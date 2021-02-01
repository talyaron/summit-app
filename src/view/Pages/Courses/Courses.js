import React from 'react';
import './Courses.css';
import React, { useEffect, useState } from 'react';

function Courses () {

    AllCourses = {
        basketball = {
            day: 'Every Tuesday',
            time: '12:00-12:45',
            location: 'Events Hall'
        },

        swimming = {
            day: 'Every Wednesday',
            time: '10:00-10:30',
            location: 'Pool'
        }
    }

    let myCourses = [basketball, swimming]

    return (
        <div>
{
        myCourses.map(Course => {
          return (<p key={index}>{AllCourses.Course}</p>)
        })
      }
        </div>
    )
}