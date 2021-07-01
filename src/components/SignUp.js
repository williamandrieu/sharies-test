import signupbackground from "../images/signupbackground.png";
import {useState} from "react";
import {LoginState} from "./LoginPage";

export const SignUp = (props) => {

    const {changeParentState} = props

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className={"login"}>
            <div>
                <label>
                    Email
                    <input type={"email"} onChange={setEmail} value={email}/>
                </label>
                <label>
                    Password
                <input type={"password"} onChange={setPassword} value={password}/>
                </label>
                <div onClick={() => changeParentState(LoginState.LOGIN)}>Login</div>
            </div>
            <div className={"signupbackground-image"}>
                <img src={signupbackground}/>
            </div>
        </div>
    )
}
