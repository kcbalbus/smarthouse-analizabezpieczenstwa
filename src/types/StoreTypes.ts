export interface Alert {
    deviceId: string;
    severity: "INFO" | "WARNING" | "CRITICAL";
    timestamp: number;
    description: string
}

export interface Sensor {
    deviceId: string;
    authKey: string;
    type: string;
    timestamp: number;
}

export interface EnergySensor extends Sensor {
    type: 'energy';
    currentPower: number;
    totalEnergy: number;
}

export interface FridgeSensor extends Sensor {
    type: 'fridge';
    temperature: number;
    doorOpen: boolean;
}

export interface LightSensor extends Sensor {
    type: 'light';
    state: boolean;
    brightness: number;
}

export interface MotionSensor extends Sensor {
    type: 'motion';
    motionDetected: boolean;
}

export interface SmokeSensor extends Sensor {
    type: 'smoke';
    smokeLevel: number;
    alarmActive: boolean;
    batteryLevel: number;
}

export interface TemperatureSensor extends Sensor {
    type: 'temperature';
    temperature: number;
    humidity: number;
}

export interface AlertCondition {
    deviceType: string;
    parameter: string;
    severity: "INFO" | "WARNING" | "CRITICAL";
    operator: "GREATER_THAN" | "LESS_THAN" | "EQUALS" | "GREATER_OR_EQUAL" | "LESS_OR_EQUAL" | "NOT_EQUALS",
    value: string;
    description: string;
}

export interface ScenarioAction {
    deviceId: string;
    command: string;
    value: string;
}

export interface Scenario {
    id: string;
    name: string;
    triggerType: string;
    triggerConditionId: string;
    actions: ScenarioAction[];
    timestamp: number;
}

