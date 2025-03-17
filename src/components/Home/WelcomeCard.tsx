import LoginButton from "../global/LoginButton.tsx";

function WelcomeCard() {

    return (
        <div>
            <h1>Smart House</h1>
            <p>You need to be logged in to access this data.</p>
            <LoginButton/>
        </div>
    )
}

export default WelcomeCard
