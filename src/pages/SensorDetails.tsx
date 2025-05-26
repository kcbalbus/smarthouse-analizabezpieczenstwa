import useSensorsStore from "../stores/SensorsStore.ts";
import {
    EnergySensor,
    FridgeSensor,
    LightSensor,
    MotionSensor,
    Sensor,
    SmokeSensor,
    TemperatureSensor
} from "../types/StoreTypes.ts";
import SensorDetailsHeader from "../components/SensorDetails/SensorDetailsHeader.tsx";
import SensorDetailsAlerts from "../components/SensorDetails/SensorDetailsAlerts.tsx";
import React from "react";
import EnergySensorDetailsMeasurements from "../components/SensorDetails/EnergySensorDetailsMeasurements.tsx";
import FridgeSensorDetailsMeasurements from "../components/SensorDetails/FridgeSensorDetailsMeasurements.tsx";
import LightSensorDetailsMeasurements from "../components/SensorDetails/LightSensorDetailsMeasurements.tsx";
import MotionSensorDetailsMeasurements from "../components/SensorDetails/MotionSensorDetailsMeasurements.tsx";
import SmokeSensorDetailsMeasurements from "../components/SensorDetails/SmokeSensorDetailsMeasurements.tsx";
import TemperatureSensorDetailsMeasurements from "../components/SensorDetails/TemperatureSensorDetailsMeasurements.tsx";
import {useParams} from "react-router-dom";



const SensorDetails: React.FC = () => {
    const { id } = useParams();
    const {sensors, alerts} = useSensorsStore()

    const sensor: Sensor | undefined = sensors.find((sensor) => sensor.deviceId === id);

    const sensorAlerts = alerts.filter(alert => alert.deviceId === id);

    if (!sensor) {
        return <p>Sensor not found</p>;
    }

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

    return (
        <div className="sensor-details-page">
            <SensorDetailsHeader sensor={sensor}/>
            {renderSensorsMeasurements()}
            <SensorDetailsAlerts sensorsAlerts={sensorAlerts}/>
        </div>
    )
}

export default SensorDetails
