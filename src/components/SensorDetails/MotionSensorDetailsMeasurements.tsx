import "../../styles/SensorDetails/SensorDetails.css"
import {MotionSensor} from "../../types/StoreTypes.ts";
import React from "react";

interface MotionSensorDetailsMeasurementsProps {
    sensor: MotionSensor
}

const MotionSensorDetailsMeasurements: React.FC<MotionSensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <div className="sensor-details-measurements">
            <p>Motion Detected: {sensor.motionDetected ? "YES" : "NO"}</p>

        </div>
    )
}

export default MotionSensorDetailsMeasurements
