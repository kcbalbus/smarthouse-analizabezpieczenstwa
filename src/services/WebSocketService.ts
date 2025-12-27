import useSensorsStore from "../stores/SensorsStore.ts";
import {errorToast} from "../utils/toasts.ts";
import {AuthService} from "./AuthService.ts";

class WebSocketService {
    private telemetrySocket: WebSocket | null = null;
    private isTelemetryConnected: boolean = false;
    private isTelemetryConnecting: boolean = false;

    async connectTelemetry(): Promise<void> {
        if (this.isTelemetryConnected || this.isTelemetryConnecting) {
            console.warn("Telemetry WebSocket is already connected or connecting.");
            return;
        }

        this.isTelemetryConnecting = true;

        const token = await AuthService.getAccessToken();
        if (!token) {
            errorToast("Failed to connect to sensors.");
            this.isTelemetryConnecting = false;
            return;
        }

        this.telemetrySocket = new WebSocket(`ws://localhost:8081/ws/telemetry?token=${token}`);

        this.telemetrySocket.onopen = () => {
            console.log("Telemetry WebSocket opened");
            this.isTelemetryConnected = true;
            this.isTelemetryConnecting = false;
        };

        this.telemetrySocket.onmessage = (event) => {
            this.onTelemetryMessage(event.data);
        };

        this.telemetrySocket.onclose = () => {
            console.warn("Telemetry WebSocket closed");
            this.isTelemetryConnected = false;
            this.isTelemetryConnecting = false;
            this.telemetrySocket = null;
        };

        this.telemetrySocket.onerror = (e) => {
            errorToast("Failed to connect to sensors.");
            console.error("Telemetry WebSocket error", e);
            this.isTelemetryConnecting = false;
        };
    }

    onTelemetryMessage(data: string): void {
        let parsed;
        try {
            parsed = JSON.parse(data);
        } catch (e) {
            console.error("Failed to parse telemetry data", e);
            return;
        }

        const messageType = parsed.type;

        switch (messageType) {
            case "alert":
                useSensorsStore.getState().setAlerts(parsed.payload);
                break;
            case "telemetry":
                useSensorsStore.getState().setTelemetry(parsed.payload);
                break;
            case "scenario":
                useSensorsStore.getState().setScenarios(parsed.payload);
                break;
            default:
                console.error("Unknown message type: " + messageType);
        }
    }

    disconnectTelemetry(): void {
        if (this.telemetrySocket) {
            this.telemetrySocket.close();
            this.telemetrySocket = null;
            this.isTelemetryConnected = false;
        }
    }
}

const webSocketService = new WebSocketService();
export default webSocketService;
