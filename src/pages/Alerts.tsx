import React, { useState } from "react";
import useSensorsStore from "../stores/SensorsStore.ts";
import AlertsControlBar from "../components/Alerts/AlertsControlBar.tsx";
import AlertsTable from "../components/Alerts/AlertsTable.tsx";
import { Alert } from "../types/StoreTypes.ts";

const Alerts: React.FC = () => {
    const { alerts, getAllSensorsId, checkSensorsTypeFromId } = useSensorsStore();

    const [deviceIdFilter, setDeviceIdFilter] = useState("All");
    const [severityFilter, setSeverityFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");


    const filteredAlerts = alerts.filter((alert: Alert) => {
        const matchesDeviceId = deviceIdFilter === "All" || alert.deviceId === deviceIdFilter;
        const matchesSeverity = severityFilter === "All" || alert.severity === severityFilter;
        const matchesType = typeFilter === "All" || checkSensorsTypeFromId(alert.deviceId, typeFilter);

        const alertDate = new Date(alert.timestamp);
        const fromDate = dateFrom ? new Date(dateFrom) : null;
        const toDate = dateTo ? new Date(dateTo) : null;

        const matchesDate =
            (!fromDate || alertDate >= fromDate) &&
            (!toDate || alertDate <= toDate);

        return matchesDeviceId && matchesSeverity && matchesType && matchesDate;
    });

    const resetFilters = () => {
        setDeviceIdFilter("All");
        setSeverityFilter("All");
        setTypeFilter("All");
        setDateFrom("");
        setDateTo("");
    }

    return (
        <div className="alerts-page-container">
            <AlertsControlBar
                deviceIdFilter={deviceIdFilter}
                setDeviceIdFilter={setDeviceIdFilter}
                deviceIdOptions={getAllSensorsId()}
                severityFilter={severityFilter}
                setSeverityFilter={setSeverityFilter}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                dateFrom={dateFrom}
                setDateFrom={setDateFrom}
                dateTo={dateTo}
                setDateTo={setDateTo}
                resetFilters={resetFilters}
            />
            <AlertsTable alerts={filteredAlerts} />
        </div>
    );
};

export default Alerts;
