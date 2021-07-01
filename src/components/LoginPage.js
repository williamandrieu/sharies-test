import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


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
        <div>
            <div onClick={login}>LOGIN</div>
            <div>

            </div>
        </div>
    )
}

