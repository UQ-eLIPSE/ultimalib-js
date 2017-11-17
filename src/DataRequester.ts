import axios from "axios";

export class DataRequester {
    public async post<T, U>(endpoint: string, data: T) {
        const response = await axios.post(endpoint, data);

        const responseBody = response.data as U;
        const status = response.status;

        return { status, responseBody };
    }
}
