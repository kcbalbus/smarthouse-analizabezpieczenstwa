import { useAuth0 } from "@auth0/auth0-react";
import {APP_URLS} from "../../utils/URLS.ts"

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => {logout({ logoutParams: { returnTo: APP_URLS.home }})
        }}>
            Log Out
        </button>
    );
};

export default LogoutButton;