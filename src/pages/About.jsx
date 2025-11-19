const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-200">
            Conoce nuestra historia, misión y valores
          </p>
        </div>
      </section>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Quiénes Somos */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">¿Quiénes Somos?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Indavco Systems</strong> es una empresa líder en soluciones tecnológicas 
                que transforma la manera en que las organizaciones operan y crecen en el mundo digital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Con años de experiencia en el sector, nos hemos consolidado como un socio estratégico 
                para empresas que buscan modernizar sus procesos, mejorar su eficiencia y mantenerse 
                competitivas en un mercado en constante evolución.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro equipo multidisciplinario combina expertise técnico con visión de negocio para 
                entregar soluciones que realmente generan valor y resultados medibles.
              </p>
              
              {/* Stats compactos */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>
            
            {/* Imagen profesional */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Equipo profesional trabajando"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar soluciones tecnológicas innovadoras y personalizadas que impulsen 
                el crecimiento y la transformación digital de nuestros clientes, superando sus 
                expectativas mediante un servicio de excelencia y compromiso continuo con la calidad.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="w-14 h-14 bg-accent bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como líderes en soluciones tecnológicas a nivel regional e internacional, 
                destacándonos por nuestra innovación constante, calidad de servicio superior y capacidad 
                de adaptarnos ágilmente a las necesidades cambiantes del mercado digital.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Excelencia</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compromiso con la calidad superior en cada proyecto que emprendemos
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Compromiso</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicación total al éxito y crecimiento de nuestros clientes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Innovación</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adopción continua de tecnologías emergentes y mejores prácticas
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Integridad</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparencia, honestidad y ética en todas nuestras operaciones
              </p>
            </div>
          </div>
        </section>

        {/* Políticas */}
        <section className="bg-white rounded-2xl shadow-lg p-10 md:p-12">
          <h2 className="text-3xl font-bold text-secondary mb-8">Nuestras Políticas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-secondary mb-3">Política de Calidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Entregamos soluciones tecnológicas de la más alta calidad mediante procesos 
                estandarizados, certificaciones internacionales y mejora continua.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-secondary mb-3">Política de Privacidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Protegemos rigurosamente la confidencialidad de los datos mediante protocolos 
                de seguridad robustos y cumplimiento de normativas vigentes.
              </p>
            </div>

            <div className="border-l-4 border-success pl-6">
              <h3 className="text-xl font-semibold text-secondary mb-3">Servicio al Cliente</h3>
              <p className="text-gray-700 leading-relaxed">
                Soporte continuo 24/7 con atención personalizada, garantizando respuestas 
                rápidas y efectivas a todas las necesidades de nuestros clientes.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-semibold text-secondary mb-3">Responsabilidad Social</h3>
              <p className="text-gray-700 leading-relaxed">
                Contribuimos al desarrollo tecnológico de la comunidad mediante programas 
                de capacitación, formación y apoyo a iniciativas educativas.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;