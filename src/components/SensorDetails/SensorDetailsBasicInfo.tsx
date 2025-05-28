import "../../styles/SensorDetails/SensorDetails.css"
import {Sensor} from "../../types/StoreTypes.ts";
import SensorDetailsHeader from "./SensorDetailsHeader.tsx";
import SensorDetailsMeasurements from "./SensorDetailsMeasurements.tsx";
import React from "react";

interface SensorDetailsBasicInfoProps {
    sensor: Sensor
}

const SensorDetailsBasicInfo: React.FC<SensorDetailsBasicInfoProps> = ({sensor}) => {


    return (
        <div className="sensor-details-basic-info">
            <SensorDetailsHeader sensor={sensor}/>
            <SensorDetailsMeasurements sensor={sensor}/>
        </div>
    )
}

export default SensorDetailsBasicInfo
