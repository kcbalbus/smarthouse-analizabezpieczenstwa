import React from "react";
import {MotionSensor} from "../../types/StoreTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css"

interface MotionSensorCardProps {
    sensor: MotionSensor;
}

const MotionSensorCard: React.FC<MotionSensorCardProps> = ({sensor}) => {
    return (
        <div className="sensor-card motion-sensor-card">
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                <p>Motion Detected: {sensor.motionDetected ? "YES" : "NO"}</p>
            </div>

        </div>
    );
};

export default MotionSensorCard;
