import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // Substitua pela URL do seu servidor
    timeout: 10000, // Tempo limite para requisições
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;