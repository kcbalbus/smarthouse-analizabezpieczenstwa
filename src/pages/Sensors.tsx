import useSensorsStore from "../stores/SensorsStore.ts";
import SensorsSection from "../components/Sensors/SensorsSection.tsx";

const Sensors = () => {
    const { getEnergySensors, getFridgeSensors, getMotionSensors,
        getTemperatureSensors, getSmokeSensors, getLightSensors} = useSensorsStore();

    return (
        <div>
            <SensorsSection title="Energy Sensors ⚡" sensors={getEnergySensors()} />
            <SensorsSection title="Fridge Sensors ❄️" sensors={getFridgeSensors()} />
            <SensorsSection title="Motion Sensors 🏃🏼‍♀️" sensors={getMotionSensors()} />
            <SensorsSection title="Temperature Sensors 🌡️" sensors={getTemperatureSensors()} />
            <SensorsSection title="Smoke Sensors 💨" sensors={getSmokeSensors()} />
            <SensorsSection title="Light Sensors 💡" sensors={getLightSensors()} />
        </div>
    )
}

export default Sensors
