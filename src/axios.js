import axios from 'axios';
import store from '@/store'; // Import the store instance

const setupApiClient = (store) => {
  const apiClient = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.request.use(config => {
    const token = store.state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return apiClient;
};

const apiClient = setupApiClient(store); // Pass the store instance to the setup function

export default apiClient;
