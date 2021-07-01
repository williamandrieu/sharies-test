import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import loginbackground from "../images/loginbackground.png"

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
           <div>

           </div>
           <div className={"loginbackground-image"}>
               <img src={loginbackground}/>
           </div>
        </div>
    )
}

