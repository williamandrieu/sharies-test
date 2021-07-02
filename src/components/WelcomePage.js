import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { setTitle } from '../util'

import avatar from '../images/avatar.png'
import logosharieswhite from '../images/logosharieswhite.svg'

const menuItemList = [
    { title: "Profile" },
    { title: "Documents" },
    { title: "Factures" },
    { title: "Informations" },
    { title: "Services" },
    { title: "Reservation" },
    { title: "Messagerie" }
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
        <div className={"welcome-wrapper"}>
            <LeftMenu>
                <img className={'left-menu-logo'} src={logosharieswhite}/>
                {menuItemList.map((item, index) => (<LeftMenuItem onClick={() => setCurrentState(index)} isSelected={index === currentState} title={item.title} />))}
                <div className={'disconnection-btn'} onClick={signOut}>Déconnexion</div>
            </LeftMenu>
            <div>
                {currentState == 0 && <Profile/>}
                {currentState != 0 && <NoContaint title={menuItemList[currentState].title}/>}
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            <img className={'profile-image'} src={auth.currentUser.photoURL ?? avatar} />
            <div>Bonjour
                <div>{auth.currentUser.displayName ?? auth.currentUser.email}</div>
            </div>
        </div>
    )
}

const NoContaint = (props) => {
    return (
        <div>
            {props.title}
            <div>Cette page sera bientot disponible</div>
        </div>
    )
}

const LeftMenu = (props) => {
    return (
        <div className={'left-menu'} >
            {props.children}
        </div>
    )
}

const LeftMenuItem = (props) => {
    return (
        <div onClick={props.onClick} className={`left-menu-item ${props.isSelected ? "selected" : ""}`}>
            {props.title}
        </div>
    )
}