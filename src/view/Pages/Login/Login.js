import React from 'react';
import './Login.css';

//controls;
import {loginGoogle} from '../../../control/firebase/login'

export default function Login() {
    return (
        <div>
            <button onClick={loginGoogle}>Google Login</button>
        </div>
    )
}
