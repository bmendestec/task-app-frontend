import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // Substitua pela URL do seu servidor
    timeout: 10000, // Tempo limite para requisições
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    console.log('Request URL:', config.baseURL + config.url);
    return config;
});
// Exemplo de interceptor para adicionar token de autenticação
axios.request({
    url: 'http://localhost:8080',
    method: 'GET',
}
);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();    
}

apiClient.interceptors.response.use(

    (config) => {
        // const token = localStorage.getItem('authToken'); // Substitua pela lógica de obtenção do token
        const token = getCookie('token'); // Substitua pela lógica de obtenção do token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)
export default apiClient;