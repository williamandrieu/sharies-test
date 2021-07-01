import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import loginbackground from "../images/loginbackground.png"
import logogoogle from "../images/logogoogle.png"
import logosharies from "../images/logosharies.png"

export const LoginPage = (props) =>{

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

    return (
        <div className={"login"}>

            <div className={"split-left"}>

           <div className={"login-content"}>
               <div className={"login-title"}>
                   <div className={"title-hand"}>Connectez vous à</div>
                   <div className={"title-serif"}>Votre espace</div>
               </div>
                <div className={"login-google-button"}>
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
                    <input id="emailText" type="text" placeholder="email@example.com"/>
               </div>
               <div className={"input-wrapper"}>
                    <label>Mot de passe</label>
                    <input id="mpdText" type="password" placeholder="•••••••"/>
               </div>
               <div className={"login-bottom-options"}>
                    <div className={"remember-check"}>Se souvenir de moi</div>
                    <div className={"mdp-forgot"}>Mot de passe oublié ?</div>
               </div>

               <div className={"orange-btn"}>
                    Accédez à votre espace
               </div>

               <div className={"ask-register"}>
                    Pas encore inscrit ? <a>Créer un compte</a>.
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

