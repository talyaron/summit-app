import React from 'react';
import './Login.css';
import logo from '../../../img/logo.png'


//controls;
import { loginGoogle } from '../../../control/firebase/login'

export default function Login() {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="container">
                <div className="centerButton">
                    <button onClick={loginGoogle}> Join </button>
                </div>
            </div>
        </div>
    )
}
