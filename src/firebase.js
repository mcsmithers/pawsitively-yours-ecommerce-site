// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "pawsitively-yours-eshop.firebaseapp.com",
    projectId: "pawsitively-yours-eshop",
    storageBucket: "pawsitively-yours-eshop.appspot.com",
    messagingSenderId: process.env.SENDER_MESSAGE_ID,
    appId: APPID,
    measurementId: "G-EP86YE3KY8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };