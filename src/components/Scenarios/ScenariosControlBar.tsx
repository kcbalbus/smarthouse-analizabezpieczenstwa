import React from "react";
import "../../styles/Alerts/AlertsTable.css";

interface ScenariosControlBarProps {
    nameFilter: string;
    setNameFilter: (value: string) => void;
    triggerTypeFilter: string;
    setTriggerTypeFilter: (value: string) => void;
    resetFilters: () => void;
}

const ScenariosControlBar: React.FC<ScenariosControlBarProps> = ({
    nameFilter,
    setNameFilter,
    triggerTypeFilter,
    setTriggerTypeFilter,
    resetFilters,
}) => {
    return (
        <div className="alerts-control-bar">
            <div>
                <label>Name: </label>
                <input type="text" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
            </div>

            <div>
                <label>Trigger Type: </label>
                <select value={triggerTypeFilter} onChange={(e) => setTriggerTypeFilter(e.target.value)}>
                    <option value="All">All</option>
                </select>
            </div>

            <div className="reset-button-div">
                <button className="reset-button" onClick={resetFilters}>Reset filters</button>
            </div>
        </div>
    );
};

export default ScenariosControlBar;

