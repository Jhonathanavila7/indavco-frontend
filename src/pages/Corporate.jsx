import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { corporatePlansAPI } from '../services/api';

const Corporate = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    corporatePlansAPI.getAll()
      .then(res => {
        setPlans(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getBillingText = (period) => {
    const texts = {
      monthly: '/mes',
      yearly: '/año',
      'one-time': 'pago único'
    };
    return texts[period] || '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Planes Corporativos</h1>
          <p className="text-xl text-gray-200">
            Soluciones empresariales adaptadas a las necesidades de tu organización
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-500">Cargando planes...</div>
          ) : plans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan._id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition ${
                    plan.recommended ? 'ring-4 ring-accent transform scale-105' : ''
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-accent text-white text-center py-2 font-semibold">
                      ⭐ Recomendado
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.currency} {getBillingText(plan.billingPeriod)}
                      </span>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-secondary mb-4">Incluye:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-success mr-2 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.maxUsers && (
                      <div className="mt-4 text-sm text-gray-500">
                        👥 Hasta {plan.maxUsers} usuarios
                      </div>
                    )}
                    
                    {plan.support && (
                      <div className="mt-2 text-sm text-gray-500">
                        🎧 Soporte {plan.support}
                      </div>
                    )}
                    
                  <Link 
                    to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition text-center block ${
                        plan.recommended
                         ? 'bg-accent hover:bg-blue-400 text-white'
                        : 'bg-primary hover:bg-blue-700 text-white'
                    }`}
                    >
                    Contratar Plan
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                Aún no hay planes corporativos disponibles.
              </p>
              <p className="text-gray-400">
                Contáctanos para una cotización personalizada.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un plan personalizado?</h2>
          <p className="text-xl mb-8">
            Contáctanos y diseñaremos una solución a la medida de tu empresa
          </p>
          <Link 
            to="/contact?plan=Cotización Personalizada"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
            Solicitar Cotización
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Corporate;