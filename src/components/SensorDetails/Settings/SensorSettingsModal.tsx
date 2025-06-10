import React, {useEffect, useState} from "react";
import {AlertCondition, Sensor} from "../../../types/StoreTypes.ts";
import "../../../styles/SensorDetails/SensorDetails.css";
import useSensorsStore from "../../../stores/SensorsStore.ts";
import AlertConditionItem from "./AlertConditionItem.tsx";
import NewAlertConditionForm from "./NewAlertConditionForm.tsx";

interface SensorSettingsModalProps {
    sensor: Sensor;
    onClose: () => void;
}

const SensorSettingsModal: React.FC<SensorSettingsModalProps> = ({ sensor, onClose }) => {
    const {
        conditions,
        getAlertConditions,
        addAlertCondition,
        deleteAlertCondition
    } = useSensorsStore();
    const [showForm, setShowForm] = useState(false);

    const sensorConditions = conditions.filter((c) => c.deviceType === sensor.type);

    useEffect(() => {
        if (conditions.length === 0) getAlertConditions();
    }, [conditions.length, getAlertConditions]);

    const handleDelete = async (param: string) => {
        await deleteAlertCondition(sensor.type, param);
    };

    const handleAdd = async (alert:AlertCondition) => {
        await  addAlertCondition(alert);
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>×</button>

                <h2>Sensor's condition list</h2>

                {sensorConditions.length > 0 ? (
                    sensorConditions.map((condition, index) => (
                        <AlertConditionItem
                            key={index}
                            condition={condition}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p>This sensor doesn't have any conditions.</p>
                )}

                {showForm ? (
                    <NewAlertConditionForm deviceType={sensor.type} onAdd={handleAdd} onClose={() => setShowForm(false)} />
                ) : (
                    <button onClick={() => setShowForm(true)}>Add new condition</button>
                )}
            </div>
        </div>
    );
};

export default SensorSettingsModal;
