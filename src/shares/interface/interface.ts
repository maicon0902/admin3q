import { API_STATUS } from "../constant/constant";


export interface IApiResponse<T> {
    data: IApiResponse<T> | null;
    status: API_STATUS;
}

export interface IAPResponseData<T> {
    errors: IAPResponseError[];
    messages: string[];
    data: T | null;
}

export interface IAPResponseError {
    code: string;
    message: string;
}