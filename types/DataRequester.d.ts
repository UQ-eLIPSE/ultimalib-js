export declare class DataRequester {
    post<T, U>(endpoint: string, data: T): Promise<{
        status: number;
        responseBody: U;
    }>;
}
