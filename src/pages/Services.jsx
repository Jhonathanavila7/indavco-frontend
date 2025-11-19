import { useEffect, useState } from 'react';
import { servicesAPI } from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    servicesAPI.getAll()
      .then(res => {
        setServices(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-200">
            Soluciones tecnológicas integrales para impulsar tu negocio
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-500">Cargando servicios...</div>
          ) : services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
  key={service._id}
  className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
>
  {/* Imagen del servicio */}
  <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
    {service.image ? (
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-full object-cover"
      />
    ) : (
      <span className="text-white text-6xl">💻</span>
    )}
  </div>
  
  <div className="p-8">
    <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
    <p className="text-gray-600 mb-6">{service.description}</p>
    
    {service.features && service.features.length > 0 && (
      <div className="border-t pt-4">
        <h4 className="font-semibold text-secondary mb-2">Características:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <span className="text-success mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                Aún no hay servicios disponibles.
              </p>
              <p className="text-gray-400">
                Estamos trabajando en agregar contenido. ¡Vuelve pronto!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;