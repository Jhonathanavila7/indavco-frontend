import axios from 'axios';

const baseURL = 'https://indavco-backend.onrender.com/api';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const servicesAPI = {
  getAll: () => api.get('/services'),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
};

export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getOne: (id) => api.get(`/projects/${id}`),  // ← ESTA LÍNEA DEBE ESTAR
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

export const clientsAPI = {
  getAll: () => api.get('/clients'),
  create: (data) => api.post('/clients', data),
  update: (id, data) => api.put(`/clients/${id}`, data),
  delete: (id) => api.delete(`/clients/${id}`),
};

export const blogAPI = {
  getAll: (params) => api.get('/blog', { params }),
  getOne: (id) => api.get(`/blog/${id}`),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  create: (data) => api.post('/blog', data),
  update: (id, data) => api.put(`/blog/${id}`, data),
  delete: (id) => api.delete(`/blog/${id}`),
};

export const corporatePlansAPI = {
  getAll: () => api.get('/corporate-plans'),
  create: (data) => api.post('/corporate-plans', data),
  update: (id, data) => api.put(`/corporate-plans/${id}`, data),
  delete: (id) => api.delete(`/corporate-plans/${id}`),
};

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
};

export default api;
