import "../../styles/SensorDetails/SensorDetails.css"
import {EnergySensor} from "../../types/StoreTypes.ts";
import React from "react";

interface EnergySensorDetailsMeasurementsProps {
    sensor: EnergySensor
}

const EnergySensorDetailsMeasurements: React.FC<EnergySensorDetailsMeasurementsProps> = ({sensor}) => {

    return(
        <div className="sensor-details-measurements">
            <p>Current power: {sensor.currentPower.toFixed(2)} W</p>
            <p>Total power: {(sensor.totalEnergy.toFixed(4))} kWh</p>
        </div>
    )
}

export default EnergySensorDetailsMeasurements
