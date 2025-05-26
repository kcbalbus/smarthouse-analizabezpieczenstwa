import {API_URLS} from "../utils/URLS.ts";
import useSensorsStore from "../stores/SensorsStore.ts";



class WebSocketService {

    private telemetrySocket: WebSocket | null = null;

    connectTelemetry(): void {
        if (this.telemetrySocket && this.telemetrySocket.readyState === WebSocket.OPEN) return;

        this.telemetrySocket = new WebSocket(API_URLS.websocket_telemetry);

        this.telemetrySocket.onmessage = (event) => {
            this.onTelemetryMessage(event.data);
        };

        this.telemetrySocket.onclose = () => console.warn("Telemetry WebSocket closed");
        this.telemetrySocket.onerror = (e) => console.error("Telemetry WebSocket error", e);
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


    closeAll(): void {
        this.telemetrySocket?.close();
        this.telemetrySocket = null;
    }
}

export default WebSocketService;
