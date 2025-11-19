import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const planFromUrl = searchParams.get('plan');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: planFromUrl || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        plan: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-200">Estamos aquí para ayudarte</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">Envíanos un mensaje</h2>
            <p className="text-gray-600 mb-8">Te responderemos en menos de 24 horas</p>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                ¡Mensaje enviado exitosamente!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Empresa</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              {planFromUrl && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Plan de Interés</label>
                  <input
                    type="text"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;