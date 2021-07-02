import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { setTitle } from '../util'

import avatar from '../images/avatar.png'
import logosharieswhite from '../images/logosharieswhite.svg'
import edouard7 from '../images/edouar7.png'

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
        <div className={"profile-container"}>
            <img className={'profile-image'} src={auth.currentUser.photoURL ?? avatar} />
            <div className={"login-title"}>
                   <div className={"title-hand"}>Bonjour</div>
                   <div className={"title-serif"}>{auth.currentUser.displayName ?? auth.currentUser.email}</div>
               </div>
        </div>
        <div className={"card-coliv"}>
            <div className={"top-card"}>
                <div className={"card-title"}>Edouard VII</div>
                <div className={"btn-card"}>Gérer mon abonnement</div>
            </div>
            <div className={"bottom-card"}>
                <div className={"cardd"}>
                    <div className={"info-container"}>
                        <div className={"info-title"}>Logement</div>
                        <div className={"info-amount"}>1 250€</div>
                    </div>
                    <div className={"info-container"}>
                        <div className={"info-title"}>Services</div>
                        <div className={"info-amount"}>120€</div>
                    </div>
                </div>
                <div className={"info-container"}>
                        <div className={"info-title"}>Total</div>
                        <div className={"info-amount"}>1 370€</div>
                    </div>
            </div>
            
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