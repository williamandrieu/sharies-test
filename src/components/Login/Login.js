import { LoginState } from "./LoginPage";
import { useEffect, useState } from "react";
import { appCheck, auth, googleProvider } from '../../firebase'

import logogoogle from "../../images/logogoogle.png"
import logosharies from "../../images/logosharies.png"
import check from "../../images/check.svg"
import { setTitle } from "../../util";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Login = (props) =>{

    const { changeParentState } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
            toast.error('💥 Email ou mot de passe invalide', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }

    useEffect(()=>{
        setTitle("Login")
    },[])

    return (
        <div className={"login"}>
            <ToastContainer/>
            <div className={"split-left"}>

           <div className={"login-content"}>
               <div className={"login-title"}>
                   <div className={"title-hand"}>Connectez vous à</div>
                   <div className={"title-serif"}>Votre espace</div>
               </div>
                <div className={"login-google-button"} onClick={loginWithGoogle}>
                    <div>
                        <img src={logogoogle}/>
                        Se connecter avec Google
                    </div>
                </div>
               <div className={"separator-email"}>
                    <div className={"separator-dash"}></div>
                    <div className={"separator-text"}>Ou utiliser votre email</div>
                    <div className={"separator-dash"}></div>
               </div>
               <div className={"input-wrapper"}>
                    <label>Email</label>
                    <input id="emailText" type="text" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
               </div>
               <div className={"input-wrapper"}>
                    <label>Mot de passe</label>
                    <input id="mdpText" type="password" placeholder="•••••••" value={password} onChange={(e) => setPassword(e.target.value)}/>
               </div>
               <div className={"login-bottom-options"}>
                    <div className={"remember-check"}><img src={check}/>Se souvenir de moi</div>
                    <div className={"mdp-forgot"}>Mot de passe oublié ?</div>
               </div>

               <div className={"orange-btn"}  onClick={() => loginWithEmail()}>
                    Accédez à votre espace
               </div>

               <div className={"ask-register"}>
                    Pas encore inscrit ? <a onClick={() => changeParentState(LoginState.SIGNUP)}>Créer un compte</a>.
               </div>
           </div>
            <img className={"logo-footer-login"} src={logosharies} />
            </div>

           <div className={"split-right"}>
            <div className={"login-background-container"}>
            </div>
            </div>
        </div>
    )
}

