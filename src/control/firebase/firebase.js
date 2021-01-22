import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const DB = firebase.firestore();

export const getUsers =  () => DB.database().ref("/users").once('value').then((snapshot) => {
    return snapshot.val();
})