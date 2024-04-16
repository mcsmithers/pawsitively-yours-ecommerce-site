import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_CkoUgaguO52nsqTePaaagrrpejAryno",
    authDomain: "pawsitively-yours-eshop.firebaseapp.com",
    projectId: "pawsitively-yours-eshop",
    storageBucket: "pawsitively-yours-eshop.appspot.com",
    messagingSenderId: "779701196162",
    appId: "1:779701196162:web:3922a0d4f2e25a4dd56b9b",
    measurementId: "G-EP86YE3KY8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };