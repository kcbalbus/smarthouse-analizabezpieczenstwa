import useSensorsStore from "../../stores/SensorsStore.ts";


const LogoutButton: React.FC = () => {
    const { resetStore } = useSensorsStore();

    return (
        <button onClick={() => {resetStore()}}>
            Reset Store
        </button>
    );
};

export default LogoutButton;