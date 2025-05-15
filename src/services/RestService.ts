import axios, {AxiosHeaders} from "axios";

class RestService {
    static async ajax(
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        data: unknown,
        accessToken?: string
    ) {

        const headers = new AxiosHeaders();

        if (accessToken) {
            headers['Authorization'] = `Bearer ${accessToken}`;
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
