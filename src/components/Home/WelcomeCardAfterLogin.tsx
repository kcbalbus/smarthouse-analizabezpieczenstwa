import React from "react";
import {useNavigate} from "react-router-dom";
import '../../styles/Home/WelcomeCard.css';

const WelcomeCardAfterLogin: React.FC = () => {
    const navigate = useNavigate();


    return (
        <div>
            <h1>Smart House</h1>
            <p>
                You're now logged in. Monitor your smart devices in real time and stay updated with any alerts.
            </p>
            <p>
                Use the buttons below to explore your sensors or check for active alerts.
            </p>
            <div className="button_section">
                <button onClick={() => {navigate("/sensors")}}>View Sensors</button>
                <button onClick={() => {navigate("/alerts")}}>Check Alerts</button>
                <button onClick={() => {navigate("/scenarios")}}>Check Scenarios</button>
            </div>
        </div>
    );
};

export default WelcomeCardAfterLogin;
