import React from "react";
import "../../styles/Alerts/AlertsTable.css";

interface ScenariosControlBarProps {
    nameFilter: string;
    setNameFilter: (value: string) => void;
    nameOptions: string[];
    dateFrom: string;
    setDateFrom: (value: string) => void;
    dateTo: string;
    setDateTo: (value: string) => void;
    triggerTypeFilter: string;
    setTriggerTypeFilter: (value: string) => void;
    resetFilters: () => void;
}

const ScenariosControlBar: React.FC<ScenariosControlBarProps> = ({
    nameFilter,
    setNameFilter,
    nameOptions,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    triggerTypeFilter,
    setTriggerTypeFilter,
    resetFilters,
}) => {
    return (
        <div className="alerts-control-bar">
            <div>
                <label>Name: </label>
                <select value={nameFilter} onChange={(e) => setNameFilter(e.target.value)}>
                    <option value="All">All</option>
                    {nameOptions?.map((n) => (
                        <option key={n} value={n}>{n}</option>
                    ))}
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

            <div>
                <label>Trigger Type: </label>
                <select value={triggerTypeFilter} onChange={(e) => setTriggerTypeFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="energy">Energy</option>
                    <option value="fridge">Fridge</option>
                    <option value="light">Light</option>
                    <option value="motion">Motion</option>
                    <option value="smoke">Smoke</option>
                    <option value="temperature">Temperature</option>
                    <option value="window">Window</option>
                </select>
            </div>

            <div className="reset-button-div">
                <button className="reset-button" onClick={resetFilters}>Reset filters</button>
            </div>
        </div>
    );
};

export default ScenariosControlBar;

