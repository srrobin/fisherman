import axios from 'axios';

const BASE_URL = 'https://puzzled-tricolor-credit.glitch.me';
// const BASE_URL = 'http://localhost:5000';
export const AxiosInstance = axios.create({ baseURL: BASE_URL });