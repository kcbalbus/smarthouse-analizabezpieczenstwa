import "../../styles/SensorDetails/SensorDetails.css"
import {TemperatureSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface TemperatureSensorDetailsMeasurementsProps {
    sensor: TemperatureSensor
}

const TemperatureSensorDetailsMeasurements: React.FC<TemperatureSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Temperature:</span> {sensor.temperature.toFixed(1)}°C</p>
            <p><span className="label">Humidity:</span> {sensor.humidity.toFixed(1)}%</p>
        </>
    )
}

export default TemperatureSensorDetailsMeasurements
