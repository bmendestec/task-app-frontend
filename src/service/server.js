import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // Substitua pela URL do seu servidor
    timeout: 10000, // Tempo limite para requisições
    headers: {
        'Content-Type': 'application/json',
    },
});

// Exemplo de interceptor para adicionar token de autenticação
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Substitua pela lógica de obtenção do token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default apiClient;