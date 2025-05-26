import "../../styles/SensorDetails/SensorDetails.css"
import {LightSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface LightSensorDetailsMeasurementsProps {
    sensor: LightSensor
}

const LightSensorDetailsMeasurements: React.FC<LightSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <div className="sensor-details-measurements">
            <p>Status: {sensor.state ? "ON" : "OFF"}</p>
            <p>Current brightness: {sensor.brightness}</p>
        </div>
    )
}

export default LightSensorDetailsMeasurements
