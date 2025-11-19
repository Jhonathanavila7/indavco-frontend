import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    'Desarrollo Web',
    'App Móvil',
    'Consultoría',
    'Infraestructura'
  ];

  useEffect(() => {
    const params = filter !== 'all' ? { category: filter } : {};
    
    projectsAPI.getAll(params)
      .then(res => {
        setProjects(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Nuestros Proyectos</h1>
          <p className="text-xl text-gray-200">
            Casos de éxito que demuestran nuestra experiencia y compromiso
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-500">Cargando proyectos...</div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  {/* Imagen */}
                  <div className="h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center overflow-hidden">
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-accent uppercase">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs bg-success text-white px-2 py-1 rounded">
                          Destacado
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {project.description.substring(0, 120)}...
                    </p>
                    
                    <div className="mb-4">
                      {project.client && (
                        <p className="text-sm text-gray-500 mb-2">
                          <strong>Cliente:</strong> {project.client}
                        </p>
                      )}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link 
                      to={`/projects/${project._id}`}
                      className="text-primary hover:text-accent font-semibold"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No hay proyectos disponibles en esta categoría.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="text-primary hover:text-accent font-semibold"
              >
                Ver todos los proyectos
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;