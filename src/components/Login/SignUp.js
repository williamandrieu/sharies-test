import signupbackground from "../../images/signupbackground.png";
import {useEffect, useState} from "react";
import {LoginState} from "./LoginPage";
import { auth, googleProvider } from '../../firebase'
import { setTitle } from "../../util";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import logogoogle from "../../images/logogoogle.png"
import logosharies from "../../images/logosharies.png"

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

    const loginWithGoogle = () => {
        auth
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.error("ERREUR", error)
            });
    }

    const loginWithEmail = () => {
        auth.signInWithEmailAndPassword(email, password).then().catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        setTitle("Signup")
    },[])

    return (
        <div className={"signup"}>

        <div className={"split-left"}>

       <div className={"login-content"}>
           <div className={"login-title"}>
               <div className={"title-hand"}>Créer votre</div>
               <div className={"title-serif"}>Compte</div>
           </div>
            <div className={"login-google-button"} onClick={loginWithGoogle}>
                <div>
                    <img src={logogoogle}/>
                    Inscription avec Google
                </div>
            </div>
           <div className={"separator-email"}>
                <div className={"separator-dash"}></div>
                <div className={"separator-text"}>Ou utiliser votre email</div>
                <div className={"separator-dash"}></div>
           </div>
           <div className={"input-wrapper"}>
                <label>Email</label>
                <input placeholder="email@example.com" type={"email"} value={email} onChange={(e) => { setEmail(e.target.value)}} />
           </div>
           <div className={"input-wrapper"}>
                <label>Mot de passe</label>
                <input id="mdpText" placeholder="•••••••" type={"password"} value={password} onChange={(e) => { setPassword(e.target.value)}}/>
           </div>
           <div className={"signup-bottom-options"}>
                <div>En cliquant sur s’incrire vous acceptez nos<br/> <a>Condition général d’utilisation.</a></div>
           </div>

           <div className={"orange-btn"}  onClick={createAccount}>
                S'inscrire
           </div>

           <div className={"ask-register"}>
                Déjà inscrit ? <a onClick={() => changeParentState(LoginState.LOGIN)}>Se connecter</a>.
           </div>
       </div>
        <img className={"logo-footer-login"} src={logosharies} />
            <ToastContainer/>
        </div>

       <div className={"split-right"}>
        <div className={"signup-background-container"}>
        </div>
        </div>
    </div>
    )
}
