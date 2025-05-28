import "../../styles/SensorDetails/SensorDetails.css"
import {SmokeSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface SmokeSensorDetailsMeasurementsProps {
    sensor: SmokeSensor
}

const SmokeSensorDetailsMeasurements: React.FC<SmokeSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Smoke level:</span> {sensor.smokeLevel.toFixed(2)}%</p>
            <p><span className="label">Battery level:</span> {sensor.batteryLevel.toFixed(0)}%</p>
            <p><span className="label">Alarm:</span> {sensor.alarmActive ? "ON" : "OFF"}</p>
        </>
    )
}

export default SmokeSensorDetailsMeasurements
