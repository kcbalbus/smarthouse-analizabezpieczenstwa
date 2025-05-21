import useSensorsStore from "../stores/SensorsStore.ts";
import SensorsSection from "../components/Sensors/SensorsSection.tsx";
import "../styles/Sensors/SensorsPage.css"

const Sensors = () => {
    const { getEnergySensors, getFridgeSensors, getMotionSensors,
        getTemperatureSensors, getSmokeSensors, getLightSensors} = useSensorsStore();

    return (
        <div className="sensors-page">
            <nav className="sensors-menu">
                <p className="sensors-menu-title">Sensor Menu</p>
                <ul>
                    <li><a href="#energy">⚡ Energy</a></li>
                    <li><a href="#fridge">❄️ Fridge</a></li>
                    <li><a href="#light">💡 Light</a></li>
                    <li><a href="#motion">🏃 Motion</a></li>
                    <li><a href="#smoke">💨 Smoke</a></li>
                    <li><a href="#temperature">🌡️ Temperature</a></li>
                </ul>
            </nav>
            <div className="sensors-list">
                <SensorsSection id="energy" title="Energy Sensors ⚡" sensors={getEnergySensors()} />
                <SensorsSection id="fridge" title="Fridge Sensors ❄️" sensors={getFridgeSensors()} />
                <SensorsSection id="light" title="Light Sensors 💡" sensors={getLightSensors()} />
                <SensorsSection id="motion" title="Motion Sensors 🏃🏼‍♀️" sensors={getMotionSensors()} />
                <SensorsSection id="smoke" title="Smoke Sensors 💨" sensors={getSmokeSensors()} />
                <SensorsSection id="temperature" title="Temperature Sensors 🌡️" sensors={getTemperatureSensors()} />
            </div>
        </div>
    )
}

export default Sensors
