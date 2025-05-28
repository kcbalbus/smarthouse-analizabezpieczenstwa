import "../../styles/SensorDetails/SensorDetails.css"
import {FridgeSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface FridgeSensorDetailsMeasurementsProps {
    sensor: FridgeSensor
}

const FridgeSensorDetailsMeasurements: React.FC<FridgeSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Temperature:</span> {sensor.temperature.toFixed(1)}°C</p>
            <p><span className="label">Doors:</span> {sensor.doorOpen ? "Open" : "Closed"}</p>
        </>
    )
}

export default FridgeSensorDetailsMeasurements
