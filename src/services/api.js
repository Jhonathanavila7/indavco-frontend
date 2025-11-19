import axios from 'axios';

// 1. Usar la variable de entorno correcta para VITE
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. DEFINIR Y EXPORTAR LOS OBJETOS QUE PIDE TU HOME.JSX
// (Aquí es donde estaba fallando el build)

export const servicesAPI = {
  getAll: () => api.get('/services'), // Ajusta '/services' a tu ruta real
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
};

export const projectsAPI = {
  getAll: () => api.get('/projects'),
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
  getAll: () => api.get('/posts'), // ⚠️ Verifica si en tu backend es '/posts' o '/blog'
  getOne: (id) => api.get(`/posts/${id}`),
  create: (data) => api.post('/posts', data),
  update: (id, data) => api.put(`/posts/${id}`, data),
  delete: (id) => api.delete(`/posts/${id}`),
};
export const corporatePlansAPI = {
  getAll: () => api.get('/corporate-plans'), // ⚠️ OJO: Verifica si en tu backend la ruta es '/corporate-plans' o solo '/plans'
  create: (data) => api.post('/corporate-plans', data),
  update: (id, data) => api.put(`/corporate-plans/${id}`, data),
  delete: (id) => api.delete(`/corporate-plans/${id}`),
};

// Exportación por defecto del objeto axios
export default api;
