import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: process.env.REACT_APP_apikey,
        authDomain: "zoom-repical.firebaseapp.com",
        projectId: "zoom-repical",
        storageBucket: "zoom-repical.appspot.com",
        messagingSenderId: "702683374112",
        appId: "1:702683374112:web:84e2c8ea4ad10e155b9245",
        measurementId: "G-FR77G5E645"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };