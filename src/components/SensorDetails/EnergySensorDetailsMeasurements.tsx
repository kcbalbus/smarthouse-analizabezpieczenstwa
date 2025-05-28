import "../../styles/SensorDetails/SensorDetails.css"
import {EnergySensor} from "../../types/StoreTypes.ts";
import React from "react";

interface EnergySensorDetailsMeasurementsProps {
    sensor: EnergySensor
}

const EnergySensorDetailsMeasurements: React.FC<EnergySensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <>
            <p><span className="label">Current power:</span> {sensor.currentPower.toFixed(2)} W</p>
            <p><span className="label">Total power:</span> {(sensor.totalEnergy.toFixed(4))} kWh</p>
        </>
    )
}

export default EnergySensorDetailsMeasurements
