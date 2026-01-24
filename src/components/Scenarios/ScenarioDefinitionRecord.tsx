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
            <div>
                <p style={{margin: 0, fontWeight: 600}}>{scenarioDef.name}</p>
                <p style={{margin: 0}}>{scenarioDef.triggerConditionId}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                <button
                    onClick={() => onToggle(scenarioDef.id, !!scenarioDef.enabled)}
                    disabled={updating}
                    style={{padding: '8px 12px'}}
                >
                    {updating ? 'Updating...' : (scenarioDef.enabled ? 'Disable' : 'Enable')}
                </button>
            </div>
        </div>
    );
}

export default ScenarioDefinitionRecord;
