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
    LightSensor, Alert
} from "../types/StoreTypes.ts";


interface SensorStoreState {
    sensors: Sensor[]
    alerts: Alert[]
    resetStore: () => void
    resetAlerts: () => void
    resetSensors: () => void
    startWebSocketConnection: () => void
    closeWebSocketConnection: () => void
    setTelemetry: (telemetry: Sensor) => void
    setAlerts: (alert: Alert) => void
    getEnergySensors: () => EnergySensor[];
    getFridgeSensors: () => FridgeSensor[];
    getSmokeSensors: () => SmokeSensor[];
    getTemperatureSensors: () => TemperatureSensor[];
    getMotionSensors: () => MotionSensor[];
    getLightSensors: () => LightSensor[];
    getAllSensorsId: () => string[];
    checkSensorsTypeFromId: (id: string, type: string) => boolean;
}

const useSensorsStore = create<SensorStoreState>()(
    persist(
        (set, get) => ({
            sensors: [],
            alerts: [],

            resetStore: () => {
                set({ sensors: [], alerts: [] });
            },

            resetSensors: () => {
                set({ sensors: [] });
            },

            resetAlerts: () => {
                set({ alerts: [] });
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

            getAllSensorsId: () => {
                const sensors = get().sensors;
                const deviceIds = sensors.map(sensor => sensor.deviceId);
                return Array.from(new Set(deviceIds));
            },

            checkSensorsTypeFromId: (id: string, type: string) => {
                const sensors = get().sensors;
                const sensor = sensors.filter(sensor => sensor.deviceId === id);
                return sensor[0].type === type;
            }

        }),
        {
            name: 'sensor-store',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export default useSensorsStore;
