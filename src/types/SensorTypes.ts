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
    currentPower: number;
    totalEnergy: number;
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

