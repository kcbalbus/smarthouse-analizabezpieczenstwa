import { create } from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import ApiService from "../services/ApiService.ts";

interface SensorStoreState {
    telemetry: string
    alert: string
    startWebSocketConnection: () => void
    closeWebSocketConnection: () => void
    setTelemetry: (telemetry: string) => void
    setAlert: (alert: string) => void
}

const useSensorsStore = create<SensorStoreState>()(
    persist(
        (set) => ({
            telemetry: "",
            alert: "",

            startWebSocketConnection: () => {
                ApiService.startTelemetryConnection();
            },

            closeWebSocketConnection: () => {
                ApiService.closeTelemetryConnection();
            },

            setTelemetry: (telemetry: string) => {
                set({ telemetry });
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
