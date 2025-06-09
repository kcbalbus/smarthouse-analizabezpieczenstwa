import RestService from "./RestService";
import {API_URLS} from "../utils/URLS";
import webSocketService from "./WebSocketService.ts";
import {AlertCondition} from "../types/StoreTypes.ts";
import {errorToast} from "../utils/toasts.ts";

class ApiService {

    static startTelemetryConnection() {
        webSocketService.connectTelemetry();
    }

    static closeTelemetryConnection() {
        webSocketService.disconnectTelemetry();
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

    static async getTypeConditions(type: string) {
        try {
            return await RestService.ajax(
                `${API_URLS.condition_alert}/${type}`,
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

    static async addCondition(device: string, param:string, condition: AlertCondition) {

        try {
            const response =  await RestService.ajax(
                `${API_URLS.condition_alert}/${device}/${param}`,
                "POST",
                condition,
            );

            console.log("Settings POST response", response);

            return response;

        } catch (error) {
            errorToast("Failed to add condition.")
            console.error("Failed to save condition", error);
        }
    }

    static async deleteCondition(device: string, param:string) {

        try {
            const response =  await RestService.ajax(
                `${API_URLS.condition_alert}/${device}/${param}`,
                "DELETE",
                null,
            );

            console.log("Settings POST response", response);

            return response;

        } catch (error) {
            errorToast("Failed to delete condition.")
            console.error("Failed to delete condition", error);
        }
    }


}

export default ApiService;