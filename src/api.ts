import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL, TIMEOUT } from './const/apiConsts';

const API_TOKEN_KEY = 'six-cities-token';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(API_TOKEN_KEY);
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const setAuthToken = (token?: string): void => {
  if (token) {
    localStorage.setItem(API_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(API_TOKEN_KEY);
  }
};
