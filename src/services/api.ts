import axios, { AxiosInstance } from 'axios';

const SERVER_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;


export default function createAPI(): AxiosInstance {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIMEOUT
  });

  return api;
}
