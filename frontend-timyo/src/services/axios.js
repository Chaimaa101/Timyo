// services/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
  withCredentials: true, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-XSRF-TOKEN': decodeURIComponent(document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1] || ''),
  }
});

export const getCsrfCookie = async () => {
  try {
    await api.get('/sanctum/csrf-cookie', {
      baseURL: 'http://localhost:8000' 
    });
  } catch (error) {
    console.error('Failed to get CSRF cookie:', error);
  }
};

export default api;