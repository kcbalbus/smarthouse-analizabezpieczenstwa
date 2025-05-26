import React from "react";
import {Alert} from "../../types/StoreTypes.ts";
import AlertRecord from "./AlertRecord.tsx";
import "../../styles/Alerts/AlertsTable.css"

interface AlertsTableProps {
    alerts: Alert[]
}

const AlertsTable: React.FC<AlertsTableProps> = ({alerts}) => {

    return (
        <div className="alerts-table">
            <div className="alerts-header">
                <p>Device</p>
                <p>Date</p>
                <p>Severity</p>
                <p>Description</p>
            </div>
            <div className="alerts-body">
                {alerts.map((alert, index) => (
                    <AlertRecord key={index} alert={alert} />
                ))}
            </div>
        </div>
    )
}

export default AlertsTable
