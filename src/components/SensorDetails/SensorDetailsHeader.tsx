import "../../styles/SensorDetails/SensorDetails.css"
import {Sensor} from "../../types/StoreTypes.ts";

interface SensorDetailsHeaderProps {
    sensor: Sensor
}

const SensorDetailsHeader: React.FC<SensorDetailsHeaderProps> = ({sensor}) => {

    return (
        <div className="sensor-details-page">
            <p>{sensor.deviceId}</p>
            <p>{sensor.type}</p>
            <p>Last update: {sensor.timestamp}</p>
        </div>
    )
}

export default SensorDetailsHeader
