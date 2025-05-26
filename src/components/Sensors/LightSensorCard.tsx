import React from "react";
import {LightSensor} from "../../types/StoreTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css"

interface LightSensorCardProps {
    sensor: LightSensor;
}

const LightSensorCard: React.FC<LightSensorCardProps> = ({sensor}) => {
    return (
        <div className="sensor-card light-sensor-card">
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                <p>Status: {sensor.state ? "ON" : "OFF"}</p>
                <p>Current brightness: {sensor.brightness}</p>
            </div>

        </div>
    );
};

export default LightSensorCard;
