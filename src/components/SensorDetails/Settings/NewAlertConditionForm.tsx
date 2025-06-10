import React, {useState} from "react";
import { AlertCondition } from "../../../types/StoreTypes.ts";
import "../../../styles/SensorDetails/SensorDetails.css";

interface NewAlertConditionFormProps {
    deviceType: string;
    onAdd: (alertCondition: AlertCondition) => void;
    onClose: () => void;
}

const PARAMETER_OPTIONS: Record<string, string[]> = {
    energy: ["currentPower", "totalEnergy"],
    fridge: ["temperature", "doorOpen"],
    light: ["state", "brightness"],
    motion: ["motionDetected"],
    smoke: ["smokeLevel", "alarmActive", "batteryLevel"],
    temperature: ["temperature", "humidity"]
};


const NewAlertConditionForm: React.FC<NewAlertConditionFormProps> = ({deviceType, onAdd, onClose }) => {
    const [formData, setFormData] = useState<Omit<AlertCondition, "deviceType">>({
        parameter: "",
        operator: "EQUALS",
        value: "",
        severity: "WARNING",
        description: "",
    });

    const parameterOptions =  PARAMETER_OPTIONS[deviceType];


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAdd = async () => {
        const newCondition: AlertCondition = {
            deviceType,
            ...formData
        };

        onAdd(newCondition);
        onClose();

    };

    return (
        <div className="add-condition-form">
            <select
                name="parameter"
                value={formData.parameter}
                onChange={handleInputChange}
            >
                {parameterOptions.map(param => (
                    <option key={param} value={param}>
                        {param}
                    </option>
                ))}
            </select>

            <select name="operator" value={formData.operator} onChange={handleInputChange}>
                <option value="EQUALS">EQUALS</option>
                <option value="NOT_EQUALS">NOT EQUALS</option>
                <option value="GREATER_THAN">GREATER THAN</option>
                <option value="LESS_THAN">LESS THAN</option>
            </select>
            <input name="value" placeholder="Value" value={formData.value} onChange={handleInputChange} />
            <select name="severity" value={formData.severity} onChange={handleInputChange}>
                <option value="WARNING">WARNING</option>
                <option value="CRITICAL">CRITICAL</option>
            </select>
            <input name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
            <div className="form-buttons">
                <button onClick={handleAdd}>Add condition</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default NewAlertConditionForm;
