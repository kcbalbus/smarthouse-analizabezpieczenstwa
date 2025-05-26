import "../../styles/SensorDetails/SensorDetails.css"
import {TemperatureSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface TemperatureSensorDetailsMeasurementsProps {
    sensor: TemperatureSensor
}

const TemperatureSensorDetailsMeasurements: React.FC<TemperatureSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <div className="sensor-details-measurements">
            <p>Temperature: {sensor.temperature.toFixed(1)}°C</p>
            <p>Humidity: {sensor.humidity.toFixed(1)}%</p>
        </div>
    )
}

export default TemperatureSensorDetailsMeasurements
