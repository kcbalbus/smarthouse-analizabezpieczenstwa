import useSensorsStore from "../stores/SensorsStore.ts";
import {
    Sensor,
} from "../types/StoreTypes.ts";
import SensorDetailsAlerts from "../components/SensorDetails/SensorDetailsAlerts.tsx";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import SensorDetailsBasicInfo from "../components/SensorDetails/SensorDetailsBasicInfo.tsx";
import SensorSettingsModal from "../components/SensorDetails/SensorSettingsModal.tsx";


const SensorDetails: React.FC = () => {
    const { id } = useParams();
    const {sensors, alerts} = useSensorsStore();
    const [showSettings, setShowSettings] = useState(false);
    

    const sensor: Sensor | undefined = sensors.find((sensor) => sensor.deviceId === id);

    const sensorAlerts = alerts.filter(alert => alert.deviceId === id);

    if (!sensor) {
        return <p>Sensor not found</p>;
    }

    return (
        <div className="sensor-details-page">
            <SensorDetailsBasicInfo sensor={sensor}/>
            <SensorDetailsAlerts sensorsAlerts={sensorAlerts} sensorType={sensor.type} />
            <div
                className={`fab-settings fab-settings-${sensor.type}`}
                onClick={() => setShowSettings(true)}
            >
                ⚙️
            </div>
            {showSettings && (
                <SensorSettingsModal
                    sensor={sensor}
                    onClose={() => setShowSettings(false)}
                />
            )}
        </div>

    )
}

export default SensorDetails
