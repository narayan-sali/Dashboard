// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/dashboard' // Adjust URL according to your backend
});

export default instance;
