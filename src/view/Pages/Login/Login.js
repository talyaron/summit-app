import React from 'react';
import './Login.css';


//controls;
import { loginGoogle } from '../../../control/firebase/login'

export default function Login() {
    return (
        <div>
            <div className="logo">
                <img src='' alt='logo' />
            </div>
            <div className="container">
                <div >
                    <button className="centerButton" onClick={loginGoogle}> התחבר </button>
                </div>
            </div>
        </div>
    )
}
