import "../../styles/SensorDetails/SensorDetails.css"
import {FridgeSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface FridgeSensorDetailsMeasurementsProps {
    sensor: FridgeSensor
}

const FridgeSensorDetailsMeasurements: React.FC<FridgeSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <div className="sensor-details-measurements">
            <p>Temperature: {sensor.temperature.toFixed(1)}°C</p>
            <p>Doors: {sensor.doorOpen ? "Open" : "Closed"}</p>
        </div>
    )
}

export default FridgeSensorDetailsMeasurements
