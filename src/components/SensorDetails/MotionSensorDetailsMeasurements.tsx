import "../../styles/SensorDetails/SensorDetails.css"
import {MotionSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface MotionSensorDetailsMeasurementsProps {
    sensor: MotionSensor
}

const MotionSensorDetailsMeasurements: React.FC<MotionSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Motion Detected:</span> {sensor.motionDetected ? "YES" : "NO"}</p>

        </>
    )
}

export default MotionSensorDetailsMeasurements
