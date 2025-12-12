import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true, 
    headers: {
        'X-XSRF-TOKEN':  decodeURIComponent(document.cookie
            .split("; ")
            .find((row) => row.startsWith("XSRF-TOKEN="))
            ?.split("=")[1])
        },

});

export const getCsrfCookie = () => {
    return axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
    });
};

export default api;
