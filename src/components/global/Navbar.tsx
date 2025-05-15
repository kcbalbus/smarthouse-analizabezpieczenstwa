import '../../styles/global/Navbar.css';
import home_icon from  "../../assets/home_icon.png";
import LogoutButton from "./LogoutButton.tsx";
import {useAuth0} from "@auth0/auth0-react";

const Navbar = () => {

    const {isAuthenticated} = useAuth0();

    if (!isAuthenticated) {
        return <></>;
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <img src={home_icon} alt="SmartHouse" />
                        SmartHouse
                    </div>
                    <a href="#home" className="navbar__link">Sensors</a>
                    <a href="#about" className="navbar__link">Alerts</a>
                </div>
                <div className="navbar__right">
                    <LogoutButton/>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
