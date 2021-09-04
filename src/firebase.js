// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
require('firebase/firestore');
require('firebase/auth');



const firebaseConfig = {
    apiKey: "AIzaSyBEeQjOnIaHjuKTcbQ60iY4s2HA25gaANM",
    authDomain: "twitter-f733f.firebaseapp.com",
    projectId: "twitter-f733f",
    storageBucket: "twitter-f733f.appspot.com",
    messagingSenderId: "1091135343866",
    appId: "1:1091135343866:web:a515b1d124c11d4947cd43",
    measurementId: "G-CFTQYE0ES6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export const auth = firebase.auth();


export default db;