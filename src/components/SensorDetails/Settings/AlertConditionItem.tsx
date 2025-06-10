import React from "react";
import { AlertCondition } from "../../../types/StoreTypes.ts";
import "../../../styles/SensorDetails/SensorDetails.css";

interface AlertConditionItemProps {
    condition: AlertCondition;
    onDelete: (param: string) => void;
}

const AlertConditionItem: React.FC<AlertConditionItemProps> = ({ condition, onDelete }) => {
    return (
        <div className="alert-condition-item">
            <div>
                <p><strong>Parameter:</strong> {condition.parameter}</p>
                <p><strong>Operator:</strong> {condition.operator}</p>
                <p><strong>Value:</strong> {condition.value}</p>
                <p><strong>Severity:</strong> {condition.severity}</p>
                <p><strong>Description:</strong> {condition.description}</p>
            </div>
            <div className="delete-button-section">
                <button className="delete-button" onClick={() => onDelete(condition.parameter)}>X</button>
            </div>
        </div>
    );
};


export default AlertConditionItem;
