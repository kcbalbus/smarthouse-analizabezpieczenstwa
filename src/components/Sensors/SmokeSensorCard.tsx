import React from "react";
import {SmokeSensor} from "../../types/StoreTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css"

interface SmokeSensorCardProps {
    sensor: SmokeSensor;
}

const SmokeSensorCard: React.FC<SmokeSensorCardProps> = ({sensor}) => {
    return (
        <div className="sensor-card smoke-sensor-card">
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                <p>Smoke level: {sensor.smokeLevel.toFixed(2)}%</p>
                <p>Battery level: {sensor.batteryLevel.toFixed(0)}%</p>
                <p>Alarm: {sensor.alarmActive ? "ON" : "OFF"}</p>
            </div>

        </div>
    );
};

export default SmokeSensorCard;
