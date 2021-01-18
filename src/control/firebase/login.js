import { fb } from './firebase';
import 'firebase/auth';

const provider = new fb.auth.GoogleAuthProvider();

export function onAuth() {
    fb.auth()
        .signInWithPopup(provider)
        .then((result) => {

            const user = result.user;
            console.log(user)

        }).catch((e) => {

            console.error(e)
        })
}

export function loginGoogle() {

    fb.auth()
        .signInWithPopup(provider)
        .then((result) => {

            const user = result.user;
            console.log(user)

            //redirect to main

        }).catch((e) => {

            console.error(e)
        })
}