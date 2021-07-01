import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


export const  WelcomePage = (props) =>{

    function signOut() {
        firebase.auth().signOut().then(r => console.log)
    }

    return (
        <div>
            <div onClick={signOut}>Se déconnecter</div>
        </div>
    )
}
