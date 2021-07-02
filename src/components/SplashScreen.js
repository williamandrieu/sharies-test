import logosharies from '../images/logosharies.png'
import loading from '../images/loading.png'

export const SplashScreen = () => {
    return (
        <div className="splash-wrapper">
            <img src={logosharies}/>
            <img className={"loading"} src={loading}/>
        </div>
    )
}