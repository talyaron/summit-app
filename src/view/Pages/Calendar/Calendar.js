import { DB } from '../../../control/firebase/firebase.js';
import {useState} from "react"


function Calendar() {
    let calendar=["fff","fff"]

    DB.collection("calendar").get().then(docs=>{
        docs.forEach(doc=>{
            calendar.push(doc.data().image)
            console.log(doc.data().image)
            console.log(calendar)
        })
    })
    
    return(
        <div>
            <h1>Calendar</h1>
            <div>
            {calendar.map((doc,index)=>{
                console.log("hello")
                console.log(doc+"hello")
                return(<div><img src={doc} key={index}/></div>)
                })   
            }
            </div>
        </div>
        
    )
}

export default Calendar