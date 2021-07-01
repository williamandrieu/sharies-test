import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp({
    apiKey: "AIzaSyDeW7BC-6FIZyw9UtiJ5C1bNrY3Lb9gs0U",
    authDomain: "sharies-test.firebaseapp.com",
    projectId: "sharies-test",
    storageBucket: "sharies-test.appspot.com",
    messagingSenderId: "736703122658",
    appId: "1:736703122658:web:f35d9c439184229f50a2bb",
    measurementId: "G-3LP99E547Y"
})

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
