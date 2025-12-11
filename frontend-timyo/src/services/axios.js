import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8000', // Set the base URL here
    withCredentials: true, // Crucial for sending cookies
});
   await api.get('/sanctum/csrf-cookie');



export default api;