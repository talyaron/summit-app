import React from 'react';
import './Profile.css';
import { DB } from '../../../control/firebase/firebase.js';

const profileList = DB.collection("profiles")
const profilesDB = [];

function Profile() {

    return (
        <div>
            <h1> Profile blala </h1>
        </div>
    )
}

export default Profile;