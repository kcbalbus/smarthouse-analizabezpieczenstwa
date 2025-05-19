import {useAuth0} from "@auth0/auth0-react";
import WelcomeCardBeforeLogin from "../components/Home/WelcomeCardBeforeLogin.tsx";
import WelcomeCardAfterLogin from "../components/Home/WelcomeCardAfterLogin.tsx";

const Home = () => {

    const { isAuthenticated} = useAuth0();

    if (!isAuthenticated) {
        return <WelcomeCardBeforeLogin/>;
    }

    return (
        <WelcomeCardAfterLogin/>
    )
}

export default Home
