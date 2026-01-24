import React, {useEffect, useState} from "react";
import "../../styles/SensorDetails/SensorDetails.css";
import useSensorsStore from "../../stores/SensorsStore.ts";
import ScenarioDefinitionRecord from "./ScenarioDefinitionRecord.tsx";
import {errorToast } from "../../utils/toasts.ts";

interface ScenariosListModalProps {
    onClose: () => void;
}

const ScenarioDefinitionsListModal: React.FC<ScenariosListModalProps> = ({ onClose }) => {
    const {
        scenarioDefinitions,
        getScenarioDefinitions,
        setScenarioDefinitionEnabled
    } = useSensorsStore();

    const [updating, setUpdating] = useState<Record<string, boolean>>({});

    useEffect(() => {
        getScenarioDefinitions();
    }, [getScenarioDefinitions]);

    const handleToggle = async (id: string, currentEnabled: boolean) => {
        try {
            setUpdating(prev => ({ ...prev, [id]: true }));
            await setScenarioDefinitionEnabled(id, !currentEnabled);
        } catch (e) {
            console.error(`Failed to toggle scenario ${id}`, e);
            errorToast('Failed to update scenario');
        } finally {
            setUpdating(prev => ({ ...prev, [id]: false }));
        }
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>×</button>
                <h2>Scenarios Definitions</h2>

                {scenarioDefinitions.length === 0 ? (
                    <p>No scenarios defined.</p>
                ) : (
                    <div>
                        {scenarioDefinitions.map((scenarioDef) => (
                            <ScenarioDefinitionRecord
                                key={scenarioDef.id}
                                scenarioDef={scenarioDef}
                                onToggle={handleToggle}
                                updating={updating[scenarioDef.id]}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default ScenarioDefinitionsListModal;
