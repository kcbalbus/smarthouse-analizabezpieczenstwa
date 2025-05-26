import "../../styles/SensorDetails/SensorDetails.css"
import {Alert} from "../../types/StoreTypes.ts";
import AlertsTable from "../Alerts/AlertsTable.tsx";

interface SensorDetailsAlertsProps {
    sensorsAlerts: Alert[],
}

const SensorDetailsAlerts: React.FC<SensorDetailsAlertsProps> = ({sensorsAlerts}) => {

    return (
        <div className="sensor-details-alerts">
            <AlertsTable alerts={sensorsAlerts} />
        </div>
    )
}

export default SensorDetailsAlerts
