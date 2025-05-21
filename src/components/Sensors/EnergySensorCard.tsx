import React from "react";
import {EnergySensor} from "../../types/SensorTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css"

interface EnergySensorCardProps {
    sensor: EnergySensor;
}

const EnergySensorCard: React.FC<EnergySensorCardProps> = ({sensor}) => {
    return (
        <div className="sensor-card energy-sensor-card">
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                <p>Current power: {sensor.currentPower.toFixed(2)} W</p>
                <p>Total power: {(sensor.totalEnergy.toFixed(4))} kWh</p>
            </div>

        </div>
    );
};

export default EnergySensorCard;
