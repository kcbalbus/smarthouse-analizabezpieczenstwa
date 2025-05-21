import {useAuth0} from "@auth0/auth0-react";
import WelcomeCardBeforeLogin from "../components/Home/WelcomeCardBeforeLogin.tsx";
import WelcomeCardAfterLogin from "../components/Home/WelcomeCardAfterLogin.tsx";
import Loading from "../components/global/Loading.tsx";

const Home = () => {

    const { isLoading, isAuthenticated} = useAuth0();

    if (isLoading) {
        return <Loading/>;
    }

    if (!isAuthenticated) {
        return <WelcomeCardBeforeLogin/>;
    }

    return (
        <WelcomeCardAfterLogin/>
    )
}

export default Home
