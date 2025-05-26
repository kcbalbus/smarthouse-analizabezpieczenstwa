import React from "react";
import {Alert} from "../../types/StoreTypes.ts";
import "../../styles/Alerts/AlertsTable.css"

interface AlertRecordProps {
    alert: Alert;
}

const AlertRecord: React.FC<AlertRecordProps> = ({alert}) => {

    const displayDate = (timestamp: number) => {
        const date = new Date(timestamp);

        return date.toLocaleString();
    }

    const severityClass = `severity-${alert.severity.toLowerCase()}`;

    return (
        <div className="alert-record">
            <p className="device">{alert.deviceId}</p>
            <p>{displayDate(alert.timestamp)}</p>
            <p className={severityClass}>{alert.severity}</p>
            <p>{alert.description}</p>
        </div>
    )
}

export default AlertRecord
