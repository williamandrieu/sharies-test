import './App.css';

import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import {useEffect, useState} from "react";

import {LoginPage} from "./components/LoginPage";
import {WelcomePage} from "./components/WelcomePage";

firebase.initializeApp({
    apiKey: "AIzaSyDeW7BC-6FIZyw9UtiJ5C1bNrY3Lb9gs0U",
    authDomain: "sharies-test.firebaseapp.com",
    projectId: "sharies-test",
    storageBucket: "sharies-test.appspot.com",
    messagingSenderId: "736703122658",
    appId: "1:736703122658:web:f35d9c439184229f50a2bb",
    measurementId: "G-3LP99E547Y"
})

const auth = firebase.auth()
const firestore = firebase.firestore()


function App() {

    const [isConnected, setIsConnected] = useState(!!auth.currentUser);

    useEffect(() => {
            auth.onAuthStateChanged((user) => {
                setIsConnected(!!user)
            })
        }, [])



    console.log(isConnected)

    return (
        <div className="App">
            <header>
            </header>
            {isConnected ? <WelcomePage user={auth.currentUser}/> : <LoginPage/>}
        </div>)


}

export default App;
