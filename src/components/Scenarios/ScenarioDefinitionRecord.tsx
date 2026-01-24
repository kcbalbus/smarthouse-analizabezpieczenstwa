import React from "react";
import "../../styles/SensorDetails/SensorDetails.css";
import { ScenarioDefinition } from "../../types/StoreTypes.ts";

interface ScenarioDefinitionRecordProps {
    scenarioDef: ScenarioDefinition;
    onToggle: (id: string, currentEnabled: boolean) => void;
    updating?: boolean;
}

const ScenarioDefinitionRecord: React.FC<ScenarioDefinitionRecordProps> = ({ scenarioDef, onToggle, updating = false }) => {
    return (
        <div style={{borderBottom: '1px solid #ddd', padding: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <p style={{fontWeight: 600, textAlign: "left", color: scenarioDef.enabled ? 'inherit' : 'grey'}}>{scenarioDef.name}</p>
            <button
                onClick={() => onToggle(scenarioDef.id, !!scenarioDef.enabled)}
                disabled={updating}
                style={{padding: '8px 12px'}}
            >
                {scenarioDef.enabled ? 'Disable' : 'Enable'}
            </button>
        </div>
    );
}

export default ScenarioDefinitionRecord;
