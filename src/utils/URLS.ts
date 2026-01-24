export const API_ROOT_URL: string = 'http://localhost:8081';
export const API_URLS: Record<string, string> = {
    websocket: `${API_ROOT_URL}/ws`,
    websocket_telemetry: `${API_ROOT_URL}/ws/telemetry`,
    condition_alert: `${API_ROOT_URL}/alert/condition`,
    scenario: `${API_ROOT_URL}/scenario`,
};


export const APP_ROOT_URL: string = 'http://localhost:5173';
export const APP_URLS: Record<string, string> = {
    home: `${APP_ROOT_URL}/`,
    sensors: `${APP_ROOT_URL}/sensors`,
    alerts: `${APP_ROOT_URL}/alerts`,
};
