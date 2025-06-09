import {API_URLS} from "../utils/URLS.ts";
import useSensorsStore from "../stores/SensorsStore.ts";
import {errorToast} from "../utils/toasts.ts";
import {AuthService} from "./AuthService.ts";

class WebSocketService {
    private telemetrySocket: WebSocket | null = null;
    private isTelemetryConnected: boolean = false;

    async connectTelemetry(): Promise<void> {
        if (this.isTelemetryConnected) {
            console.warn("Telemetry WebSocket is already connected.");
            return;
        }

        const token = await AuthService.getAccessToken();
        if (!token) {
            errorToast("Failed to connect to sensors.");
            return;
        }

        const wsUrl = new URL(API_URLS.websocket_telemetry);
        //wsUrl.searchParams.append("token", token);

        this.telemetrySocket = new WebSocket(wsUrl.toString());

        this.telemetrySocket.onopen = () => {
            console.log("Telemetry WebSocket opened");
            this.isTelemetryConnected = true;
        };

        this.telemetrySocket.onmessage = (event) => {
            this.onTelemetryMessage(event.data);
        };

        this.telemetrySocket.onclose = () => {
            console.warn("Telemetry WebSocket closed");
            this.isTelemetryConnected = false;
            this.telemetrySocket = null;
        };

        this.telemetrySocket.onerror = (e) => {
            errorToast("Failed to connect to sensors.");
            console.error("Telemetry WebSocket error", e);
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
