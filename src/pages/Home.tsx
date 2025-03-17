import {useAuth0} from "@auth0/auth0-react";
import Loading from "../components/global/Loading.tsx";
import WelcomeCard from "../components/Home/WelcomeCard.tsx";
import LogoutButton from "../components/global/LogoutButton.tsx";

function Home() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading/>;
    }

    if (!isAuthenticated) {
        return <WelcomeCard/>;
    }

    return (
        <div>
            <h1>Welcome, {user?.email}</h1>
            <LogoutButton/>
        </div>
    )
}

export default Home
