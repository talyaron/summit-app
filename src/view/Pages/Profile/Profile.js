import React from 'react';
import './Profile.css';
import { DB } from '../../../control/firebase/firebase.js';

const profileList = DB.collection("profiles")
const profilesDB = [];

function Profile() {

    return (
        <div className='profile'>
        <div>
            <h1> Profile </h1>
        </div>
        {profilesDB.map((profile, index) => {
            return (
        <div className='Name' key={index}>
            Name: {profile.name}
         </div>
         <div className='Photo' key={index}>
             <img className='image' src={profile.image} alt={"photo of" + profile.name }/>
         </div>
    </div>
            )
        })}

        </div>
    )
}

export default Profile;