import React from "react";
import LoginButton from "../global/LoginButton.tsx";

const WelcomeCardBeforeLogin: React.FC = () => {
    return (
        <div>
            <h1>Smart House</h1>
            <p>You need to be logged in to access this data.</p>
            <LoginButton />
        </div>
    );
};

export default WelcomeCardBeforeLogin;
