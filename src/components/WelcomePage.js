import { useEffect } from 'react'
import { auth } from '../firebase'
import { setTitle } from '../util'


export const  WelcomePage = (props) =>{

    function signOut() {
        auth.signOut()
    }

    useEffect(()=>{
        setTitle("Profile")
    },[])

    return (
        <div>
            {auth.currentUser.email}
            <div onClick={signOut}>Se déconnecter</div>
        </div>
    )
}
