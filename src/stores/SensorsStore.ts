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
    LightSensor
} from "../types/SensorTypes.ts";


interface SensorStoreState {
    sensors: Sensor[]
    alert: string
    startWebSocketConnection: () => void
    closeWebSocketConnection: () => void
    setTelemetry: (telemetry: Sensor) => void
    setAlert: (alert: string) => void
    getEnergySensors: () => EnergySensor[];
    getFridgeSensors: () => FridgeSensor[];
    getSmokeSensors: () => SmokeSensor[];
    getTemperatureSensors: () => TemperatureSensor[];
    getMotionSensors: () => MotionSensor[];
    getLightSensors: () => LightSensor[];
}

const useSensorsStore = create<SensorStoreState>()(
    persist(
        (set, get) => ({
            sensors: [],
            alert: "",

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
            
            

            setAlert: (alert: string) => {
                set({ alert });
            },


        }),
        {
            name: 'sensor-store',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export default useSensorsStore;
