import { DB } from './firebase';

export const saveUserToDB = (user) => {
    try {
        console.log(user)
        if(!{}.hasOwnProperty.call(user, 'uid')) throw new Error('user do not have uid');

        let userObj = JSON.parse(JSON.stringify(user))

        DB.collection('users').doc(user.uid)
        .set(userObj, {merge:true})
        .then(()=>{
            sessionStorage.setItem('user',JSON.stringify(userObj))
        })
        .catch(e=>{
            console.error(e)
        })
    } catch (e) {
        console.error(e)
    }
}