import React from 'react'


export const Course = () => {
    const course = {
        name: 'tennis',
        instructors: ['Avi'],
        date:'Wednesday, 2:00pm-3:00pm',
        // date:{
        //     starting:'date',
        //     end:'date',
        //     repeat:[
        //         {days:1, hoursStart:'12:40', hoursEnd:'15:00'} //the hours should be in date format
        //     ]
        // },
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
        center: 'sport',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_HxGflb-53zVTxUlG_TbBi6aPpPVoarXzQ&usqp=CAU',
    
    }
    return (
        <div className="course">
           <img src=${course.image}/>
    <p><button className="chat">chat</button> </p>
        </div>
    )
}
