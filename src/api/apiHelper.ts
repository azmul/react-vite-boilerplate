import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import qs from "query-string";
import { getTokens } from "@/identity/identityHelper";
import * as authApi from "@/identity/identityApi";
import { saveTokens } from "@/identity/identityHelper";
import { ResponseStatus } from "./apiConst";
import { ENV } from "./config";

interface MyWindow extends Window {}
declare var window: MyWindow;

/** Setup an API instance */
export const api = axios.create({
  baseURL: ENV.API_HOST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "index" });
  },
});

/**
 * Adds autherization headers to API calls
 * @param {InternalAxiosRequestConfig} request
 */
api.interceptors.request.use(async (
  request: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig<any>> => {
  const { accessToken } = getTokens();

  request.headers["Authorization"] = `Bearer ${accessToken}`;

  return request;
});

/** Response interceptor for API calls and refresh token handing */ 
api.interceptors.response.use((response: AxiosResponse) => {
  return response
}, async function (error) {
  const originalRequest = error.config;

  if (error.response.status === ResponseStatus.TOKEN_EXPIRED  && !originalRequest._retry) {
    const { refreshToken } = getTokens();
    originalRequest._retry = true;
    
    const token: {accessToken: string; refreshToken: string} = await authApi.refreshToken(refreshToken);
    saveTokens(token.accessToken, token.refreshToken)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token.accessToken}`;
    return api(originalRequest);
  }
  return Promise.reject(error);
});

/**
 * Axios error interceptor
 * @param {AxiosError} axiosError
 */
api.interceptors.response.use((res) => res, (axiosError: AxiosError) => {
  if (axiosError && axiosError?.response) {
    const response = axiosError?.response;

    if (response.status.toString().startsWith("5")) {
      message.error("ServerError");
      return;
    }
  }

  return Promise.reject(axiosError);
});


