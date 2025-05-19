import { useEffect, ReactNode } from "react";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../global/Loading.tsx";

interface RequireAuthProps {
    children: ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const { isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate("/", {replace: true});
        }
    }, [isLoading]);

    if (isLoading) {
        return <Loading/>;
    }


    return children;
};

export default RequireAuth;