import axios from 'axios';

const { REACT_APP_HOSTNAME, REACT_APP_BACKEND_PORT } = process.env;

const baseURL = `http://${
  REACT_APP_HOSTNAME || 'localhost'
}:${REACT_APP_BACKEND_PORT || '3001'}`;

const api = axios.create({ baseURL });

const postRequest = async (endpoint, body) => api.post(endpoint, body);

const getRequest = async (endpoint) => api.get(endpoint);

export default {
  postRequest,
  getRequest,
};
