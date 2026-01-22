import React from "react";
import {
    EnergySensor,
    FridgeSensor,
    LightSensor,
    MotionSensor,
    Sensor,
    SmokeSensor,
    TemperatureSensor,
    WindowSensor
} from "../../types/StoreTypes.ts";
import SensorCardHeader from "./SensorCardHeader.tsx";
import "../../styles/Sensors/SensorCard.css";
import {useNavigate} from "react-router-dom";

interface SensorCardProps {
    sensor: Sensor;
}

const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
    const navigate = useNavigate();

    const renderMeasurements = (sensor: Sensor) => {
        switch (sensor.type) {
            case "energy":
                { const energy = sensor as EnergySensor;
                return (
                    <>
                        <p>Current power: {energy.currentPower.toFixed(2)} W</p>
                        <p>Total power: {energy.totalEnergy.toFixed(4)} kWh</p>
                    </>
                ); }
            case "fridge":
                { const fridge = sensor as FridgeSensor;
                return (
                    <>
                        <p>Temperature: {fridge.temperature.toFixed(1)}°C</p>
                        <p>Doors: {fridge.doorOpen ? "Open" : "Closed"}</p>
                    </>
                ); }
            case "light":
                { const light = sensor as LightSensor;
                return (
                    <>
                        <p>Status: {light.state ? "ON" : "OFF"}</p>
                        <p>Current brightness: {light.brightness}</p>
                    </>
                ); }
            case "motion":
                { const motion = sensor as MotionSensor;
                return (
                    <>
                        <p>Motion Detected: {motion.motionDetected ? "YES" : "NO"}</p>
                    </>
                ); }
            case "smoke":
                { const smoke = sensor as SmokeSensor;
                return (
                    <>
                        <p>Smoke level: {smoke.smokeLevel.toFixed(2)}%</p>
                        <p>Battery level: {smoke.batteryLevel.toFixed(0)}%</p>
                        <p>Alarm: {smoke.alarmActive ? "ON" : "OFF"}</p>
                    </>
                ); }
            case "temperature":
                { const temp = sensor as TemperatureSensor;
                return (
                    <>
                        <p>Temperature: {temp.temperature.toFixed(1)}°C</p>
                        <p>Humidity: {temp.humidity.toFixed(1)}%</p>
                    </>
                ); }
            case "window":
                {
                    const win = sensor as WindowSensor;
                    return (
                        <>
                            <p>Window: {win.isOpen ? "Open" : "Closed"}</p>
                        </>
                    );
                }
            default:
                return <p>Unsupported sensor type</p>;
        }
    };

    return (
        <div onClick={() => navigate(`/sensors/${sensor.deviceId}`)} className={`sensor-card ${sensor.type}-sensor-card`}>
            <SensorCardHeader sensor={sensor} />
            <div className="sensor-card-content">
                {renderMeasurements(sensor)}
            </div>
        </div>
    );
};

export default SensorCard;
