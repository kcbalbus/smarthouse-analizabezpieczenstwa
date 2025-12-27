import { create } from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import ApiService from "../services/ApiService.ts";
import {
    Sensor,
    EnergySensor,
    FridgeSensor,
    SmokeSensor,
    TemperatureSensor,
    MotionSensor,
    LightSensor, Alert, AlertCondition, Scenario
} from "../types/StoreTypes.ts";


interface SensorStoreState {
    sensors: Sensor[]
    alerts: Alert[]
    scenarios: Scenario[]
    conditions: AlertCondition[]
    resetStore: () => void
    resetAlerts: () => void
    resetScenarios: () => void
    resetSensors: () => void
    startWebSocketConnection: () => void
    closeWebSocketConnection: () => void
    setTelemetry: (telemetry: Sensor) => void
    setAlerts: (alert: Alert) => void
    setScenarios: (scenario: Scenario) => void
    getEnergySensors: () => EnergySensor[];
    getFridgeSensors: () => FridgeSensor[];
    getSmokeSensors: () => SmokeSensor[];
    getTemperatureSensors: () => TemperatureSensor[];
    getMotionSensors: () => MotionSensor[];
    getLightSensors: () => LightSensor[];
    getAllSensorsId: () => string[];
    checkSensorsTypeFromId: (id: string, type: string) => boolean;
    getAlertConditions: () => Promise<AlertCondition[]>;
    addAlertCondition: (condition: AlertCondition) => Promise<void>;
    deleteAlertCondition: (type: string, param: string) => Promise<void>;
}

const useSensorsStore = create<SensorStoreState>()(
    persist(
        (set, get) => ({
            sensors: [],
            alerts: [],
            scenarios: [],
            conditions: [],

            resetStore: () => {
                set({ sensors: [], alerts: [] , scenarios: [] });
            },

            resetSensors: () => {
                set({ sensors: [] });
            },

            resetAlerts: () => {
                set({ alerts: [] });
            },

            resetScenarios: () => {
                set({ scenarios: [] });
            },

            startWebSocketConnection: () => {
                ApiService.startTelemetryConnection();
            },

            closeWebSocketConnection: () => {
                ApiService.closeTelemetryConnection();
            },

            setTelemetry: (telemetry: Sensor) => {
                set((state) => {
                    const exists = state.sensors.some(sensor => sensor.deviceId === telemetry.deviceId);

                    if (!exists) {
                        return {
                            sensors: [...state.sensors, telemetry]
                        };
                    } else {
                        return {
                            sensors: state.sensors.map(sensor =>
                                sensor.deviceId === telemetry.deviceId ? telemetry : sensor
                            )
                        };
                    }
                });
            },

            getEnergySensors: () => {
                return get().sensors.filter(sensor => sensor.type === 'energy') as EnergySensor[];
            },

            getFridgeSensors: () => {
                return get().sensors.filter(sensor => sensor.type === 'fridge') as FridgeSensor[];
            },

            getSmokeSensors: () => {
                return get().sensors.filter(sensor => sensor.type === 'smoke') as SmokeSensor[];
            },

            getTemperatureSensors: () => {
                return get().sensors.filter(sensor => sensor.type === 'temperature') as TemperatureSensor[];
            },

            getMotionSensors: () => {
                return get().sensors.filter(sensor => sensor.type === 'motion') as MotionSensor[];
            },

            getLightSensors: () => {
                return get().sensors.filter(sensor => sensor.type === 'light') as LightSensor[];
            },



            setAlerts: (alert: Alert) => {
                set((state => {
                    return {
                        alerts: [alert, ...state.alerts]
                    }
                }));
            },

            setScenarios: (scenario: Scenario) => {
                console.log("recieved scenarios", scenario);
                set((state => {
                    return {
                        scenarios: [scenario, ...state.scenarios]
                    }
                }));
            },

            getAllSensorsId: () => {
                const sensors = get().sensors;
                const deviceIds = sensors.map(sensor => sensor.deviceId);
                return Array.from(new Set(deviceIds));
            },

            checkSensorsTypeFromId: (id: string, type: string) => {
                const sensors = get().sensors;
                const sensor = sensors.filter(sensor => sensor.deviceId === id);
                return sensor[0].type === type;
            },

            getAlertConditions: async () => {
                try {
                    const response = await ApiService.getAllConditions();
                    if (response) {
                        set({ conditions: response });
                    }
                    return response;
                } catch (error) {
                    console.error("Error fetching alert conditions:", error);
                    return [];
                }
            },

            addAlertCondition: async (alertCondition: AlertCondition)=> {
                try {
                    await ApiService.addCondition(alertCondition);
                    await get().getAlertConditions();
                } catch (error) {
                    console.error("Error fetching alert conditions:", error);
                }
            },

            deleteAlertCondition: async (type: string, param: string) => {
                try {
                    await ApiService.deleteCondition(type, param);
                    await get().getAlertConditions();
                } catch (error) {
                    console.error("Error fetching alert conditions:", error);
                }
            }


        }),
        {
            name: 'sensor-store',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export default useSensorsStore;
