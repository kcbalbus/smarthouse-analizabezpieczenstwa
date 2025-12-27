import React from "react";
import { Scenario } from "../../types/StoreTypes.ts";
import "../../styles/Alerts/AlertsTable.css";
import ScenarioRecord from "./ScenarioRecord.tsx";

interface ScenariosTableProps {
    scenarios: Scenario[];
}

const ScenariosTable: React.FC<ScenariosTableProps> = ({ scenarios }) => {

    return (
        <div className="alerts-table scenarios-table">
            <div className={`alerts-header`}>
                <p>Name</p>
                <p>Date</p>
                <p>Trigger Condition</p>
                <p>Actions</p>
            </div>
            <div className="alerts-body">
                {scenarios?.length === 0 ? (
                    <p>No scenarios found.</p>
                ) : (
                    scenarios.map((scenario, idx) => (
                        <ScenarioRecord key={scenario.id ?? idx} scenario={scenario} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ScenariosTable;
