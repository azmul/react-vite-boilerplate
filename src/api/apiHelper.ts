import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { message } from "antd";
import qs from "query-string";
import { getTokens, clearTokens } from "@/identity/identityHelper";
import { ResponseStatus } from "./apiConst";
import { ENV } from "./config";

interface MyWindow extends Window {}
declare var window: MyWindow;

/**
 * Adds autherization headers to API calls
 * @param {InternalAxiosRequestConfig} request
 */
const authInterceptor = async (
  request: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig<any>> => {
  const { accessToken } = getTokens();

  request.headers["Authorization"] = `Bearer ${accessToken}`;
  return request;
};

/**
 * Axios error interceptor
 * @param {AxiosError} axiosError
 */
const errorInterceptor = (axiosError: AxiosError) => {
  if (axiosError && axiosError?.response) {
    const response = axiosError?.response;

    if (Number(response.status) === ResponseStatus.UNAUTHORIZED) {
      clearTokens();
      setTimeout(() => {
        window.location.href = "/signin";
      });
      return;
    }

    if (response.status.toString().startsWith("5")) {
      message.error("ServerError");
      return;
    }
  }

  return Promise.reject(axiosError);
};

/** Setup an API instance */
export const api = axios.create({
  baseURL: ENV.API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "index" });
  },
});

/** Add interceptor */
api.interceptors.request.use(authInterceptor);
api.interceptors.response.use((res) => res, errorInterceptor);
