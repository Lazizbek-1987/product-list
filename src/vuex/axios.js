import axios from 'axios';

const apiClient = axios.create({
    baseURL: axios.defaults.baseURL = 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiClient;