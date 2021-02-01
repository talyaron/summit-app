import React from 'react';
import './Login.css';

//controls;
import {loginGoogle} from '../../../control/firebase/login'

export default function Login() {
    return (

    <div className="logo">
        <img src="logo.png"/>
    </div>

    <div className="container">
        <div className="centerButton">
            <button onClick={loginGoogle}> Join </button>
        </div>
    </div>

    )
}
