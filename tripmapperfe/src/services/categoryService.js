import axios from '../api/axios';

const categoryService = {
  getAll: async () => {
    const response = await axios.get('/Categories');
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`/Categories/${id}`);
    return response.data;
  },

  create: async (categoryData) => {
    const response = await axios.post('/Categories', categoryData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`/Categories/${id}`);
    return response.data;
  },
};

export default categoryService;
