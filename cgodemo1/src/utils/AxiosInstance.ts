// axiosInstance.js
import axios from 'axios';
import CustomAsyncStorage from './CustomAsyncStorage';
import AppConfig from '../config/AppConfig';

const axiosInstance = axios.create({
  baseURL: AppConfig.conf.BACKEND_URL,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await CustomAsyncStorage().getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    //console.log('Request sent:', config);
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

export default axiosInstance;
