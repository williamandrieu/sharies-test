import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { setTitle } from '../util'

import avatar from '../images/avatar.png'

const menuItemList = [
   {title:"Profile"},
   {title:"Documents" },
   {title:"Factures"},
   {title:"Informations"},
   {title:"Services"},
   {title:"Reservation"},
   {title:"Messagerie"}
]

export const WelcomePage = (props) => {

    const [currentState, setCurrentState] = useState(0);

    function signOut() {
        auth.signOut()
    }

    useEffect(() => {
        setTitle("Profile")
    }, [])

    return (
        <div>
            {auth.currentUser.email}
            <div onClick={signOut}>Déconnection</div>
            <LeftMenu>
                {menuItemList.map((item,index) => (<LeftMenuItem onClick={()=>setCurrentState(index)} isSelected={index === currentState} title={item.title}/>))}
            </LeftMenu>
            <div>
                <div>{menuItemList[currentState].title}</div>
                <img src={auth.currentUser.photoURL ?? avatar}/>
                <div>Bienvenue {auth.currentUser.displayName ?? auth.currentUser.email}</div>
            </div>
        </div>
    )
}

const LeftMenu = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const LeftMenuItem = (props) => {
    return (
        <div onClick={props.onClick}>
            {props.title}
        </div>
    )
}