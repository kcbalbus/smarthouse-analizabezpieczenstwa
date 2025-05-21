import React from "react";
import {Sensor} from "../../types/SensorTypes.ts";

interface SensorCardHeaderProps {
    sensor: Sensor;
}

const SensorCardHeader: React.FC<SensorCardHeaderProps> = ({sensor}) => {

    const displayDate = (timestamp: number) => {
        const date = new Date(timestamp);

        return date.toTimeString().slice(0, 8);
    }

    return (
        <div className="sensor-card-header">
            <p className="sensor-card-title">{sensor.deviceId}</p>
            <p>{displayDate(sensor.timestamp)}</p>
        </div>
    );
};

export default SensorCardHeader;
