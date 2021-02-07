import React, {useEffect , useState} from 'react';
import './Profile.css';
import { DB } from '../../../control/firebase/firebase.js';

const profileList = DB.collection("users")
const profilesDB = [];


function Profile() {
    const [user, setUser] = useState({displayName:''})

    useEffect(()=>{
        
        setUser( JSON.parse(sessionStorage.getItem('user')));
    },[])

    return (
        <div className='profile'>
            <h1> Profile </h1>
        
          
<div>
        <div className='Name' key={user.uid}>
            Name: {user.displayName}
         </div>

         <div className='Photo' key={user.uid}>
             <img className='image' src={user.photoURL} alt={"photo of" + user.displayName}/>
         </div>
                </div>
            
        

        </div>
    )
}

export default Profile;