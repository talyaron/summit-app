import React from 'react';
import './Profile.css';
import { DB } from '../../../control/firebase/firebase.js';

const profileList = DB.collection("profiles")
const profilesDB = []

return(
    <div>
        <h1> Profile </h1>
    </div>
)