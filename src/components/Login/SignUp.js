import signupbackground from "../../images/signupbackground.png";
import {useState} from "react";
import {LoginState} from "./LoginPage";
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

export const SignUp = (props) => {

    const {changeParentState} = props

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const createAccount = () =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className={"login"}>
            <div>
                <label>
                    Email
                    <input type={"email"} value={email} onChange={(e) => { setEmail(e.target.value)}} />
                </label>
                <label>
                    Password
                <input type={"password"} value={password} onChange={(e) => { setPassword(e.target.value)}}/>
                </label>
                <div onClick={createAccount}>Create account</div>
                <div onClick={() => changeParentState(LoginState.LOGIN)}>Login</div>
            </div>
            <div className={"signupbackground-image"}>
                <img src={signupbackground}/>
            </div>
        </div>
    )
}
