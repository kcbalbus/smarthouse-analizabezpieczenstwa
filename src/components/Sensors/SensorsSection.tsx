import React from "react";
import { Sensor } from "../../types/StoreTypes.ts";
import "../../styles/Sensors/SensorsSection.css";
import SensorCard from "./SensorCard.tsx";

interface SensorsSectionProps {
    id?: string;
    title: string;
    sensors: Sensor[];
}

const SensorsSection: React.FC<SensorsSectionProps> = ({ id, title, sensors }) => {
    return (
        <div id={id} className="sensors-section">
            <div className="sensors-section-title">
                <p>{title}</p>
            </div>
            <div className="sensors-section-cards">
                {sensors.length === 0 ? (
                    <p>No sensors detected.</p>
                ) : (
                    sensors.map((sensor) => (
                        <SensorCard key={sensor.deviceId} sensor={sensor} />
                    ))
                )}
            </div>
        </div>
    );
};

export default SensorsSection;
