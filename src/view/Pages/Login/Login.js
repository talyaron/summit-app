import React from 'react';
import './Login.css';


//controls;
import { loginGoogle } from '../../../control/firebase/login'

export default function Login() {
    return (
        <div>
            <div className="container">
                <img src='' alt='logo' />
                <h1>Login Page</h1>
                <button id="loginButton" onClick={loginGoogle}> Join </button>
               
            </div>
        </div>
    )
}
