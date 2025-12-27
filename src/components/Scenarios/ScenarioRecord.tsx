import React from "react";
import { Scenario } from "../../types/StoreTypes.ts";
import "../../styles/Alerts/AlertsTable.css";

interface ScenarioRecordProps {
    scenario: Scenario;
}

const ScenarioRecord: React.FC<ScenarioRecordProps> = ({ scenario }) => {

    const displayDate = (timestamp?: number) => {
        if (!timestamp) return "";
        const date = new Date(timestamp);
        return date.toLocaleString();
    }

    const actionsText = (scenario.actions && scenario.actions.length > 0)
        ? scenario.actions.map(a => `${a.deviceId}: ${a.command}(${a.value})`).join("; ")
        : "";

    return (
        <div className="alert-record scenarios-record">
            <p >{scenario.name}</p>
            <p >{displayDate(scenario.timestamp)}</p>
            <p >{scenario.triggerConditionId}</p>
            <p >{actionsText}</p>
        </div>
    )
}

export default ScenarioRecord;
