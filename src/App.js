import './App.css';
import {useEffect, useState} from "react";
import { SplashScreen } from './components/SplashScreen';
import { WelcomePage } from './components/WelcomePage';
import { LoginPage } from './components/Login/LoginPage';
import { auth } from './firebase'

function App() {

    const [isConnected, setIsConnected] = useState(!!auth.currentUser);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            auth.onAuthStateChanged((user) => {
                setTimeout(()=>{
                    setIsLoading(false)
                },700)
                
                setIsConnected(!!user)
            })
        }, [])


    console.log(isConnected)

    return (
        <div className="App">
            {isLoading && <SplashScreen/>}
            { !isLoading && (isConnected ? <WelcomePage user={auth.currentUser}/> : <LoginPage/>)}
        </div>)


}

export default App;
