import {useAuth0} from "@auth0/auth0-react";
import Loading from "../components/global/Loading.tsx";
import WelcomeCard from "../components/Home/WelcomeCard.tsx";
import useSensorsStore from "../stores/SensorsStore.ts";


function Home() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const {telemetry, alert} = useSensorsStore();

    if (isLoading) {
        return <Loading/>;
    }

    if (!isAuthenticated) {
        return <WelcomeCard/>;
    }

    return (
        <div>
            <h1>Welcome, {user?.email}</h1>
            <div>
                {telemetry.deviceId}
            </div>
            <div>
                {alert.severity}
            </div>
        </div>
    )
}

export default Home
