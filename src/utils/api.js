// api.js

import axios from 'axios';

const baseURL = 'http://127.0.0.1:3006';

const api = axios.create({
  baseURL,
  timeout: 5000, // Set a timeout (optional)
});



export default api;
