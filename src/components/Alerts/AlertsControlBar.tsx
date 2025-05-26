import React from "react";
import "../../styles/Alerts/AlertsTable.css";

interface AlertsControlBarProps {
    deviceIdFilter: string;
    setDeviceIdFilter: (value: string) => void;
    deviceIdOptions: string[];
    severityFilter: string;
    setSeverityFilter: (value: string) => void;
    typeFilter: string;
    setTypeFilter: (value: string) => void;
    dateFrom: string;
    setDateFrom: (value: string) => void;
    dateTo: string;
    setDateTo: (value: string) => void;
    resetFilters: () => void;
}

const AlertsControlBar: React.FC<AlertsControlBarProps> = ({
                                               deviceIdFilter,
                                               setDeviceIdFilter,
                                               deviceIdOptions,
                                               severityFilter,
                                               setSeverityFilter,
                                               typeFilter,
                                               setTypeFilter,
                                               dateFrom,
                                               setDateFrom,
                                               dateTo,
                                               setDateTo,
                                                resetFilters,
                                           }) => {
    return (
        <div className="alerts-control-bar">
            <div>
                <label>Device ID: </label>
                <select value={deviceIdFilter} onChange={(e) => setDeviceIdFilter(e.target.value)}>
                    <option value="All">All</option>
                    {deviceIdOptions.map(id => (
                        <option key={id} value={id}>{id}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Severity: </label>
                <select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="INFO">Info</option>
                    <option value="WARNING">Warning</option>
                    <option value="CRITICAL">Critical</option>
                </select>
            </div>

            <div>
                <label>Type: </label>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="energy">Energy</option>
                    <option value="fridge">Fridge</option>
                    <option value="light">Light</option>
                    <option value="motion">Motion</option>
                    <option value="smoke">Smoke</option>
                    <option value="temperature">Temperature</option>
                </select>
            </div>

            <div>
                <label>From: </label>
                <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                />
                <label>To: </label>
                <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                />
            </div>

            <div className="reset-button-div">
                <button className="reset-button" onClick={resetFilters}>Reset filters</button>
            </div>
        </div>
    );
};

export default AlertsControlBar;
