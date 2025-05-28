import axios, { AxiosHeaders } from "axios";
import { AuthService } from "./AuthService";

class RestService {
    static async ajax(
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        data: unknown
    ) {
        const headers = new AxiosHeaders();

        const token = await AuthService.getAccessToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            url,
            method,
            data,
            headers,
            withCredentials: true,
        };

        const response = await axios.request(config);
        return response.data;
    }
}

export default RestService;
