import axios from 'axios';

const api = axios.create({
  baseURL: 'http://12.345.678.900:5000/'
});

export default api;
