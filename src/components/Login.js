import signupbackground from "../images/signupbackground.png";
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import {LoginState} from "./LoginPage";
import {useState} from "react";


export const Login = (props) => {

    const {changeParentState} = props

    const provider = new firebase.auth.GoogleAuthProvider();
    const login = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
            console.error("ERREUR",error)
        });
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className={"login"}>
            <div>
                <label>
                    Email
                    <input type={"email"} onChange={setEmail}/>
                </label>
                <label>
                    Password
                    <input type={"password"} onChange={setPassword}/>
                </label>
                <div onClick={() => changeParentState(LoginState.SIGNUP)}>Signup</div>
            </div>
            <div className={"signupbackground-image"}>
                <img src={signupbackground}/>
            </div>
        </div>
    )
}
