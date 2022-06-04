import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({ baseURL });

const postRequest = async (endpoint, body) => api.post(endpoint, body);

const getRequest = async (endpoint) => api.get(endpoint);

const deleteRequest = async (endpoint) => api.delete(endpoint);

export {
  postRequest,
  getRequest,
  deleteRequest,
};
