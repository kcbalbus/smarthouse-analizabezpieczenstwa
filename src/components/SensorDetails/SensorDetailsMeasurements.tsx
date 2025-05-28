import "../../styles/SensorDetails/SensorDetails.css"
import React from "react";
import {
    EnergySensor,
    FridgeSensor,
    LightSensor,
    MotionSensor,
    Sensor,
    SmokeSensor,
    TemperatureSensor
} from "../../types/StoreTypes.ts";
import EnergySensorDetailsMeasurements from "./EnergySensorDetailsMeasurements.tsx";
import FridgeSensorDetailsMeasurements from "./FridgeSensorDetailsMeasurements.tsx";
import LightSensorDetailsMeasurements from "./LightSensorDetailsMeasurements.tsx";
import MotionSensorDetailsMeasurements from "./MotionSensorDetailsMeasurements.tsx";
import SmokeSensorDetailsMeasurements from "./SmokeSensorDetailsMeasurements.tsx";
import TemperatureSensorDetailsMeasurements from "./TemperatureSensorDetailsMeasurements.tsx";

interface SensorDetailsMeasurementsProps {
    sensor: Sensor
}

const SensorDetailsMeasurements: React.FC<SensorDetailsMeasurementsProps> = ({sensor}) => {

    const renderSensorsMeasurements = () => {
        switch (sensor.type) {
            case "energy":
                return <EnergySensorDetailsMeasurements sensor={sensor as EnergySensor}/>;
            case "fridge":
                return <FridgeSensorDetailsMeasurements sensor={sensor as FridgeSensor}/>;
            case "light":
                return <LightSensorDetailsMeasurements  sensor={sensor as LightSensor}/>;
            case "motion":
                return <MotionSensorDetailsMeasurements  sensor={sensor as MotionSensor}/>;
            case "smoke":
                return <SmokeSensorDetailsMeasurements sensor={sensor as SmokeSensor}/>;
            case "temperature":
                return <TemperatureSensorDetailsMeasurements sensor={sensor as TemperatureSensor}/>;
            default:
                return <p>Unknown sensor type</p>;
        }
    }


    return(
        <div className={`sensor-details-section sensor-details-measurements ${sensor.type}-details-section`}>
            {renderSensorsMeasurements()}
        </div>
    )
}

export default SensorDetailsMeasurements
