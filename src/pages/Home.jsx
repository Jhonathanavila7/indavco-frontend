import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { servicesAPI, projectsAPI, clientsAPI } from '../services/api';


const Home = () => {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
  // Cargar servicios
  servicesAPI.getAll()
    .then(res => setServices(res.data.data.slice(0, 3)))
    .catch(err => console.error(err));

  // Cargar proyectos destacados
  projectsAPI.getAll({ featured: true })
    .then(res => setProjects(res.data.data.slice(0, 3)))
    .catch(err => console.error(err));

  // Cargar clientes
  clientsAPI.getAll()
    .then(res => setClients(res.data.data))
    .catch(err => console.error(err));
}, []);

  return (
    <div>
     {/* Hero Section Compacto */}
<section className="relative bg-gradient-to-br from-secondary via-primary to-secondary text-white py-20 md:py-24 overflow-hidden">
  {/* Elementos decorativos sutiles */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-10 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-success rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Columna izquierda - Contenido */}
      <div className="text-center lg:text-left">
        <div className="inline-block mb-4">
          <span className="bg-accent bg-opacity-20 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent border-opacity-30">
            🚀 Tecnología e Innovación
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Transformamos Ideas en{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-success">
            Realidad Digital
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Desarrollo web, apps móviles y consultoría IT para empresas que buscan crecer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/services"
            className="bg-accent hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Ver Servicios
            <span>→</span>
          </Link>
          <Link
            to="/contact"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Columna derecha - Estadísticas/Visual */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:scale-105 transition">
          <div className="text-4xl font-bold text-accent mb-2">50+</div>
          <div className="text-sm text-gray-300">Proyectos Exitosos</div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:scale-105 transition">
          <div className="text-4xl font-bold text-success mb-2">100%</div>
          <div className="text-sm text-gray-300">Clientes Satisfechos</div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:scale-105 transition">
          <div className="text-4xl font-bold text-accent mb-2">24/7</div>
          <div className="text-sm text-gray-300">Soporte Disponible</div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:scale-105 transition">
          <div className="text-4xl font-bold text-success mb-2">5+</div>
          <div className="text-sm text-gray-300">Años de Experiencia</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Sobre Nosotros - Por qué elegirnos */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-secondary mb-4">¿Por Qué Elegir Indavco Systems?</h2>
      <p className="text-xl text-gray-600">Somos más que una empresa de tecnología, somos tu socio estratégico</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Razón 1 */}
      <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Soluciones Personalizadas</h3>
        <p className="text-gray-100">
          No usamos plantillas genéricas. Cada proyecto se diseña específicamente para tus necesidades y objetivos únicos.
        </p>
      </div>

      {/* Razón 2 */}
      <div className="bg-gradient-to-br from-success to-primary text-white rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Tecnología de Vanguardia</h3>
        <p className="text-gray-100">
          Utilizamos las últimas tecnologías y mejores prácticas del mercado para garantizar soluciones escalables y futuras.
        </p>
      </div>

      {/* Razón 3 */}
      <div className="bg-gradient-to-br from-accent to-success text-white rounded-2xl p-8 hover:shadow-2xl transition transform hover:scale-105">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Compromiso con Plazos</h3>
        <p className="text-gray-100">
          Entregamos en tiempo y forma. Tu proyecto es nuestra prioridad y cumplimos lo que prometemos.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-3xl font-bold text-secondary mb-4">
        Conoce Nuestra Historia, Misión y Valores
      </h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Descubre qué nos hace diferentes, nuestro compromiso con la excelencia y cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
      </p>
      <Link
        to="/nosotros"
        className="inline-block bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
      >
        Conocer Más Sobre Nosotros →
      </Link>
    </div>
  </div>
</section>

      {/* Servicios destacados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600">Soluciones tecnológicas adaptadas a tus necesidades</p>
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
  <div key={service._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
    {/* Imagen del servicio */}
    <div className="h-40 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
      {service.image ? (
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-white text-5xl">💻</span>
      )}
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link to="/services" className="text-primary hover:text-accent font-semibold">
        Saber más →
      </Link>
    </div>
  </div>
))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Cargando servicios...</div>
          )}
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Proyectos Destacados</h2>
            <p className="text-gray-600">Casos de éxito que hablan por nosotros</p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                {project.featuredImage ? (
                  <img 
                    src={project.featuredImage} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-6xl">🚀</span>
                )}
              </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                    <Link to="/projects" className="text-primary hover:text-accent font-semibold">
                      Ver proyecto →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Cargando proyectos...</div>
          )}
        </div>
      </section>
  
const API_BASE = 'https://indavco-backend.onrender.com';
{/* Nuestros Clientes */}
{clients.length > 0 && (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary mb-4">Nuestros Clientes</h2>
        <p className="text-gray-600">Empresas que confían en nosotros</p>
      </div>
      {/* Carrusel infinito */}
      <div className="relative overflow-hidden flex justify-center">
        <div className="flex gap-16 items-center justify-center" style={{
          animation: 'scroll 30s linear infinite',
          width: 'fit-content',
          paddingLeft: '50%',
          paddingRight: '50%'
        }}>
          {/* Duplicamos varias veces para efecto infinito */}
          {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client._id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={`${API_BASE}${client.logo}`}
                alt={client.name}
                className="h-28 md:h-36 w-auto object-contain"
                style={{ minWidth: '180px', maxWidth: '280px' }}
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8">Contáctanos hoy y llevemos tu negocio al siguiente nivel</p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
