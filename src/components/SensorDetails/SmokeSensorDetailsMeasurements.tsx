import "../../styles/SensorDetails/SensorDetails.css"
import {SmokeSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface SmokeSensorDetailsMeasurementsProps {
    sensor: SmokeSensor
}

const SmokeSensorDetailsMeasurements: React.FC<SmokeSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <div className="sensor-details-measurements">
            <p>Smoke level: {sensor.smokeLevel.toFixed(2)}%</p>
            <p>Battery level: {sensor.batteryLevel.toFixed(0)}%</p>
            <p>Alarm: {sensor.alarmActive ? "ON" : "OFF"}</p>
        </div>
    )
}

export default SmokeSensorDetailsMeasurements
