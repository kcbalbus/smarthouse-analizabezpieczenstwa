import '../../styles/global/Navbar.css';
import home_icon from "../../assets/home_icon.png";
import LogoutButton from "./LogoutButton.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <></>;
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    <NavLink to="/" className="navbar__logo">
                        <img src={home_icon} alt="SmartHouse" />
                        <span>SmartHouse</span>
                    </NavLink>
                    <NavLink to="/sensors" className="navbar__link">Sensors</NavLink>
                    <NavLink to="/alerts" className="navbar__link">Alerts</NavLink>
                </div>
                <div className="navbar__right">
                    <LogoutButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
