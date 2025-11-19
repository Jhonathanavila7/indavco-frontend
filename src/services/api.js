import axios from 'axios';

// ❌ FORMA INCORRECTA (Para Create React App)
// const baseURL = process.env.REACT_APP_API_URL; 

// ✅ FORMA CORRECTA (Para VITE)
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'; 
// (El '||' ayuda a tener un fallback si la variable falla)

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        // Si usas tokens, asegúrate de manejarlos aquí o en interceptores
    },
});

export default api;
