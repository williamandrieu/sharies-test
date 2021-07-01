import loginbackground from "../../images/loginbackground.png";
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { LoginState } from "./LoginPage";
import { useState } from "react";


export const Login = (props) => {

    const { changeParentState } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginWithGoogle = () => {
        firebase.auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.error("ERREUR", error)
            });
    }

    const loginWithEmail = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then().catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className={"login"}>
            <div>
                <div onClick={loginWithGoogle}>Login GOOGLE</div>
                <label>
                    Email
                    <input type={"email"} value={email} onChange={(e) => { setEmail(e.target.value)}} />
                </label>
                <label>
                    Password
                    <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div onClick={() => loginWithEmail()}>Login</div>
                <div onClick={() => changeParentState(LoginState.SIGNUP)}>Signup</div>
            </div>
            <div className={"signupbackground-image"}>
                <img src={loginbackground} />
            </div>
        </div>
    )
}
