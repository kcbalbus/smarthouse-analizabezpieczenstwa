import React from "react";
import {TemperatureSensor} from "../../types/SensorTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css"

interface TemperatureSensorCardProps {
    sensor: TemperatureSensor;
}

const TemperatureSensorCard: React.FC<TemperatureSensorCardProps> = ({sensor}) => {

    return (
        <div className="sensor-card temperature-sensor-card">
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                <p>Temperature: {sensor.temperature.toFixed(1)}°C</p>
                <p>Humidity: {sensor.humidity.toFixed(1)}%</p>
            </div>
        </div>
    );
};

export default TemperatureSensorCard;
