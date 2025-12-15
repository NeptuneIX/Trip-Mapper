import axios from '../api/axios';

const authService = {
  login: async (username, password) => {
    const response = await axios.post('/Auth/login', { username, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  register: async (userData) => {
    const response = await axios.post('/Auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: async () => {
    const response = await axios.get('/Users/me');
    return response.data;
  },
};

export default authService;
