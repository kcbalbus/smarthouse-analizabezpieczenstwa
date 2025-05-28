import "../../styles/SensorDetails/SensorDetails.css"
import {Alert} from "../../types/StoreTypes.ts";
import AlertsTable from "../Alerts/AlertsTable.tsx";

interface SensorDetailsAlertsProps {
    sensorsAlerts: Alert[],
    sensorType: string
}

const SensorDetailsAlerts: React.FC<SensorDetailsAlertsProps> = ({sensorsAlerts, sensorType}) => {

    return (
        <div>
            <AlertsTable alerts={sensorsAlerts} sensorType={sensorType}  />
        </div>
    )
}

export default SensorDetailsAlerts
