// services/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // or just 'http://localhost:8000'
  withCredentials: true, // ← THIS IS CRITICAL!
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

// CSRF cookie function
export const getCsrfCookie = async () => {
  try {
    await api.get('/sanctum/csrf-cookie', {
      baseURL: 'http://localhost:8000' // Override baseURL for this call
    });
  } catch (error) {
    console.error('Failed to get CSRF cookie:', error);
  }
};

// Request interceptor to add CSRF token
api.interceptors.request.use(config => {
  // Get CSRF token from cookies
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];
  
  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(csrfToken);
  }
  
  return config;
}
);

export default api;