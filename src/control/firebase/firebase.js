import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const DB = firebase.firestore();
export const fb = firebase;

export const getUsers =  () => DB.collection("users").get().then((snapshot) => {
    return snapshot.docs.map(doc => doc.data());
})