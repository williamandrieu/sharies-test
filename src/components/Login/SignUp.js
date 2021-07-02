import signupbackground from "../../images/signupbackground.png";
import {useEffect, useState} from "react";
import {LoginState} from "./LoginPage";
import { auth } from '../../firebase'
import { setTitle } from "../../util";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = (props) => {

    const {changeParentState} = props

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const createAccount = () =>{
        try{
            auth.createUserWithEmailAndPassword(email,password)
        }catch(error){
            toast.error('💥 Email ou mot de passe invalide', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    useEffect(()=>{
        setTitle("Signup")
    },[])

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
            <ToastContainer/>
        </div>
    )
}
