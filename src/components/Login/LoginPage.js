import {useState} from "react";
import {Login} from "./Login";
import {SignUp} from "./SignUp";

export const LoginState =  {
    LOGIN : "login",
    SIGNUP : "signup"
}

export const LoginPage = (props) =>{

    const [currentState, setCurrentState] = useState(LoginState.LOGIN)

    return (
        <div className={"login-wrapper"}>
            {currentState === LoginState.LOGIN && <Login changeParentState={setCurrentState}/>}
            {currentState === LoginState.SIGNUP && <SignUp changeParentState={setCurrentState}/>}
        </div>
    )
}

