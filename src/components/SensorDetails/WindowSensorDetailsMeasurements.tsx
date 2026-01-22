import "../../styles/SensorDetails/SensorDetails.css"
import { WindowSensor } from "../../types/StoreTypes.ts";
import React from "react";

interface WindowSensorDetailsMeasurementsProps {
    sensor: WindowSensor
}

const WindowSensorDetailsMeasurements: React.FC<WindowSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Window state:</span> {sensor.isOpen ? "Open" : "Closed"}</p>
        </>
    )
}

export default WindowSensorDetailsMeasurements
