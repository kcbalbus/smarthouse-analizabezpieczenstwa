import "../../styles/SensorDetails/SensorDetails.css"
import {Sensor} from "../../types/StoreTypes.ts";

interface SensorDetailsHeaderProps {
    sensor: Sensor
}

const SensorDetailsHeader: React.FC<SensorDetailsHeaderProps> = ({sensor}) => {

    const displayDate = (timestamp: number) => {
        const date = new Date(timestamp);

        return date.toTimeString().slice(0, 8);
    }

    return (
        <div className={`sensor-details-section sensor-details-header ${sensor.type}-details-section`}>
            <div >
                <p className="sensor-details-header-title">{sensor.deviceId}</p>
                <p>Category: {sensor.type}</p>
            </div>
            <div>
                <p>Last update: {displayDate(sensor.timestamp)}</p>
            </div>


        </div>
    )
}

export default SensorDetailsHeader
