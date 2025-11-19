import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token en cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Servicios
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getOne: (id) => api.get(`/services/${id}`),
};

// Blog
export const blogAPI = {
  getAll: (params) => api.get('/blog', { params }),
  getOne: (slug) => api.get(`/blog/${slug}`),
};

// Proyectos
export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getOne: (id) => api.get(`/projects/${id}`),
};

// Planes Corporativos
export const corporatePlansAPI = {
  getAll: () => api.get('/corporate-plans'),
  getOne: (id) => api.get(`/corporate-plans/${id}`),
};

// Autenticación
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
};
// Clientes
export const clientsAPI = {
  getAll: () => api.get('/clients'),
};

export default api;