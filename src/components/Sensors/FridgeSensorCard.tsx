import React from "react";
import {FridgeSensor} from "../../types/StoreTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css"

interface FridgeSensorCardProps {
    sensor: FridgeSensor;
}

const FridgeSensorCard: React.FC<FridgeSensorCardProps> = ({sensor}) => {
    return (
        <div className="sensor-card fridge-sensor-card">
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                <p>Temperature: {sensor.temperature.toFixed(1)}°C</p>
                <p>Doors: {sensor.doorOpen ? "Open" : "Closed"}</p>
            </div>

        </div>
    );
};

export default FridgeSensorCard;
