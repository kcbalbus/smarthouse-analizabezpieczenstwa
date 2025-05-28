import "../../styles/SensorDetails/SensorDetails.css"
import {LightSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface LightSensorDetailsMeasurementsProps {
    sensor: LightSensor
}

const LightSensorDetailsMeasurements: React.FC<LightSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Status:</span> {sensor.state ? "ON" : "OFF"}</p>
            <p><span className="label">Current brightness:</span> {sensor.brightness}</p>
        </>
    )
}

export default LightSensorDetailsMeasurements
