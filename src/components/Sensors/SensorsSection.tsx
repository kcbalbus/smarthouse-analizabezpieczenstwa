import React from "react";
import {
    EnergySensor,
    FridgeSensor,
    LightSensor,
    MotionSensor,
    Sensor,
    SmokeSensor,
    TemperatureSensor
} from "../../types/SensorTypes.ts";
import "../../styles/Sensors/SensorsSection.css"
import EnergySensorCard from "./EnergySensorCard.tsx";
import FridgeSensorCard from "./FridgeSensorCard.tsx";
import LightSensorCard from "./LightSensorCard.tsx";
import MotionSensorCard from "./MotionSensorCard.tsx";
import SmokeSensorCard from "./SmokeSensorCard.tsx";
import TemperatureSensorCard from "./TemperatureSensorCard.tsx";

interface SensorsSectionProps {
    title: string;
    sensors: Sensor[];
}

const SensorsSection: React.FC<SensorsSectionProps> = ({ title, sensors }) => {
    return (
        <div className="sensors-section">
            <div className="sensors-section-title">
                <p >{title}</p>
            </div>
            <div className="sensors-section-cards">
                {sensors.length === 0 ? (
                    <p>No sensors detected.</p>
                ) : (
                    sensors.map((sensor) => {
                        switch (sensor.type) {
                            case "energy":
                                return <EnergySensorCard key={sensor.deviceId} sensor={sensor as EnergySensor} />;
                            case "fridge":
                                return <FridgeSensorCard key={sensor.deviceId} sensor={sensor as FridgeSensor} />;
                            case "light":
                                return <LightSensorCard key={sensor.deviceId} sensor={sensor as LightSensor} />;
                            case "motion":
                                return <MotionSensorCard key={sensor.deviceId} sensor={sensor as MotionSensor} />;
                            case "smoke":
                                return <SmokeSensorCard key={sensor.deviceId} sensor={sensor as SmokeSensor} />;
                            case "temperature":
                                return <TemperatureSensorCard key={sensor.deviceId} sensor={sensor as TemperatureSensor} />;
                            default:
                                return null;
                        }
                    })
                )}
            </div>
        </div>
    );
};

export default SensorsSection;
