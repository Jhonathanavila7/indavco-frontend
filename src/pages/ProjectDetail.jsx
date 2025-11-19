import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsAPI } from '../services/api';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    loadProject();
  }, [id]);

  const loadProject = async () => {
    try {
      const response = await projectsAPI.getOne(id);
      setProject(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error cargando proyecto:', error);
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">Cargando proyecto...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-secondary mb-4">Proyecto no encontrado</h1>
            <Link to="/projects" className="text-primary hover:text-accent">
              ← Volver a proyectos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const displayImages = project.images && project.images.length > 0 
    ? project.images 
    : project.featuredImage 
    ? [project.featuredImage] 
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="text-white hover:text-gray-200 mb-4 inline-block">
            ← Volver a proyectos
          </Link>
          
          <div className="mb-4">
            <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="ml-2 bg-accent bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Destacado
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-200">
            {project.client && (
              <>
                <span>Cliente: {project.client}</span>
                <span>•</span>
              </>
            )}
            {project.completedDate && (
              <span>{formatDate(project.completedDate)}</span>
            )}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Columna principal - Galería e info */}
          <div className="lg:col-span-2">
            {/* Galería de imágenes */}
            {displayImages.length > 0 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                {/* Imagen principal */}
                <div className="h-96 bg-gray-100">
                  <img
                    src={displayImages[selectedImage]}
                    alt={`${project.title} - Imagen ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Miniaturas */}
                {displayImages.length > 1 && (
                  <div className="p-4 grid grid-cols-4 md:grid-cols-6 gap-2">
                    {displayImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`h-20 rounded-lg overflow-hidden border-2 transition ${
                          selectedImage === index 
                            ? 'border-primary' 
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Descripción */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Sobre el Proyecto</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          {/* Sidebar - Detalles */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-secondary mb-6">Detalles del Proyecto</h3>
              
              <div className="space-y-6">
                {/* Cliente */}
                {project.client && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Cliente</h4>
                    <p className="text-gray-700">{project.client}</p>
                  </div>
                )}

                {/* Categoría */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Categoría</h4>
                  <p className="text-gray-700">{project.category}</p>
                </div>

                {/* Fecha */}
                {project.completedDate && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Fecha de Finalización</h4>
                    <p className="text-gray-700">{formatDate(project.completedDate)}</p>
                  </div>
                )}

                {/* Tecnologías */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Tecnologías</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botón de sitio web */}
                {project.projectUrl && (
                  <div className="pt-4 border-t">
                    
                     <a href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition"
                    >
                      Visitar Sitio Web →
                    </a>
                  </div>
                )}

                {/* Contacto */}
                <div className="pt-4 border-t">
                  <Link
                    to="/contact"
                    className="block w-full bg-accent hover:bg-blue-400 text-white text-center py-3 rounded-lg font-semibold transition"
                  >
                    Solicitar Proyecto Similar
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;