import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    "Contente-type": 'application/json'
  }
});

export default axiosInstance;