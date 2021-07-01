import { auth } from '../firebase'


export const  WelcomePage = (props) =>{

    function signOut() {
        auth.signOut()
    }

    return (
        <div>
            {auth.currentUser.email}
            <div onClick={signOut}>Se déconnecter</div>
        </div>
    )
}
