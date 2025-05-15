import RestService from "./RestService";
import {API_URLS} from "../utils/URLS";
import WebSocketService from "./WebSocketService.ts";

class ApiService {
    private static webSocket = new WebSocketService();

    static startTelemetryConnection() {
        this.webSocket.connectTelemetry();
    }

    static closeTelemetryConnection() {
        this.webSocket.closeAll();
    }


    static async getAllConditions() {
        try {
            return await RestService.ajax(
                `${API_URLS.condition_alert}`,
                "GET",
                null
            );
        } catch (error) {
            console.error("Failed to fetch all conditions:", error);
        }
    }

    static async getConditions(deviceName: string, paramName: string) {
        try {
            return await RestService.ajax(
                `${API_URLS.condition_alert}/${deviceName}/${paramName}`,
                "GET",
                null
            );
        } catch (error) {
            console.error(`Failed to fetch condition of ${deviceName} - ${paramName}:`, error);
        }
    }

    static async createCondition(condition: string) {

        try {
            const response =  await RestService.ajax(
                `${API_URLS.condition_alert}`,
                "POST",
                condition,
            );

            console.log("Settings POST response", response);

            return response;

        } catch (error) {
            console.error("Failed to save condition", error);
        }
    }


}

export default ApiService;