import React, { useState } from 'react';
import { Stethoscope, MapPin, Phone, MessageCircle, Wind, Activity, Clock, CheckCircle, Menu, X, Instagram, Facebook } from 'lucide-react';

const DrRodrigoLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Link do WhatsApp formatado
  const whatsappLink = "https://wa.me/5521966999895?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Rodrigo.";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    // Fallback image suitable for a medical professional context
    target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop";
  };

  return (
    <div className="font-sans text-gray-700 antialiased bg-gray-50 min-h-screen flex flex-col">
      
      {/* --- NAV BAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Stethoscope size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Dr. Rodrigo Gonçalves</h1>
                <p className="text-xs text-blue-600 font-medium">CRM 105635-2</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sobre</a>
              <a href="#especialidades" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Especialidades</a>
              <a href="#locais" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Locais</a>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Agendar Consulta
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-md transition"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full z-50">
            <div className="flex flex-col space-y-4">
              <a href="#sobre" onClick={toggleMenu} className="text-gray-700 font-medium py-2 border-b border-gray-50">Sobre</a>
              <a href="#especialidades" onClick={toggleMenu} className="text-gray-700 font-medium py-2 border-b border-gray-50">Especialidades</a>
              <a href="#locais" onClick={toggleMenu} className="text-gray-700 font-medium py-2 border-b border-gray-50">Locais de Atendimento</a>
              <a 
                href={whatsappLink}
                className="bg-green-500 text-white py-3 rounded-lg text-center font-bold flex justify-center items-center gap-2"
              >
                <MessageCircle size={20} />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-12 pb-20 overflow-hidden flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Texto Hero */}
          <div className="md:w-1/2 text-center md:text-left z-10">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide">
              Saúde Respiratória Especializada
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Respire melhor,<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">viva com qualidade.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atendimento clínico especializado em doenças pulmonares e cirurgia torácica. 
              Seu bem-estar é a nossa prioridade absoluta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-blue-200 shadow-xl transition-all transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Agendar Agora
              </a>
              <a 
                href="#sobre" 
                className="bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors"
              >
                Saiba Mais
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle size={16} className="text-blue-600" /> Atendimento Humanizado
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                <CheckCircle size={16} className="text-blue-600" /> Especialista Reconhecido
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-20 transform translate-x-10 translate-y-10"></div>
            {/* FOTO DO DOUTOR */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 group">
               {/* 
                  Updated image source to the URL provided by the user.
               */}
               <img 
                 src="https://respira-facil-drrodrigo.lovable.app/assets/dr-rodrigo-Dvj_yJKk.png" 
                 onError={handleImageError}
                 alt="Dr. Rodrigo Jorge Pereira Gonçalves" 
                 className="w-full h-auto object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105"
               />
               
               {/* Cartão flutuante sobre a imagem */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border-l-4 border-blue-600">
                 <p className="font-bold text-gray-900 text-lg">Dr. Rodrigo J. P. Gonçalves</p>
                 <p className="text-sm text-blue-600 font-semibold">Pneumologia & Cirurgia Torácica</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOBRE --- */}
      <section id="sobre" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Conheça o Médico</span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Sobre o Especialista</h3>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Sou <strong>Dr. Rodrigo Jorge Pereira Gonçalves</strong>, dedicado à saúde respiratória com formação complementar em Pneumologia e residência em Cirurgia Geral e Torácica. Minha missão é oferecer um diagnóstico preciso e um tratamento que devolva sua qualidade de vida.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Activity size={32} />
              </div>
              <h4 className="font-bold text-xl mb-3 text-gray-900">Cirurgia Torácica</h4>
              <p className="text-gray-500 leading-snug">Residência Médica Especializada em procedimentos torácicos complexos.</p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wind size={32} />
              </div>
              <h4 className="font-bold text-xl mb-3 text-gray-900">Pneumologia</h4>
              <p className="text-gray-500 leading-snug">Pós-graduação e acompanhamento clínico de doenças respiratórias.</p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Clock size={32} />
              </div>
              <h4 className="font-bold text-xl mb-3 text-gray-900">Experiência</h4>
              <p className="text-gray-500 leading-snug">Registro Profissional<br/><span className="font-semibold text-blue-600">CREMERJ 105635-2</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ESPECIALIDADES --- */}
      <section id="especialidades" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
             <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Áreas de Atuação</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Cuidados completos e integrados para o seu sistema respiratório.</p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Tosse Crônica e Persistente",
                "Falta de Ar (Dispineia)",
                "Asma e Bronquite",
                "DPOC e Enfisema Pulmonar",
                "Nódulos e Manchas Pulmonares",
                "Pneumonias Recorrentes",
                "Tratamento do Tabagismo",
                "Sequelas Respiratórias",
                "Check-up Pulmonar Preventivo"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  </div>
                  <div>
                    <span className="font-bold text-gray-800 text-lg">{item.split(' (')[0]}</span>
                    {item.includes('(') && <span className="block text-sm text-gray-500 mt-1">{item.split(' (')[1].replace(')', '')}</span>}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- LOCAIS --- */}
      <section id="locais" className="py-20 bg-blue-900 text-white scroll-mt-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Locais de Atendimento</h3>
            <p className="text-blue-200 text-lg">Atendimento em consultórios de excelência no Rio de Janeiro</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Card Local 1 - Itaboraí */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition duration-300 text-center border border-white/10 h-full flex flex-col justify-center">
              <MapPin className="mx-auto mb-6 text-blue-300" size={40} />
              <h4 className="text-2xl font-bold mb-3">Itaboraí</h4>
              <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Consultório com infraestrutura completa para seu atendimento especializado.
              </p>
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition w-full"
              >
                <MessageCircle size={18} />
                Agendar em Itaboraí
              </a>
            </div>
            
            {/* Card Local 2 - Niterói (Destaque) */}
            <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl transform md:scale-110 md:-translate-y-2 text-center relative z-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                Principal
              </div>
              <MapPin className="mx-auto mb-6 text-blue-600" size={48} />
              <h4 className="text-3xl font-bold mb-3">Niterói</h4>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Clínica central, moderna e com fácil acesso para exames e consultas detalhadas.
              </p>
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition w-full"
              >
                <MessageCircle size={18} />
                Agendar em Niterói
              </a>
            </div>

            {/* Card Local 3 - Saquarema */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition duration-300 text-center border border-white/10 h-full flex flex-col justify-center">
              <MapPin className="mx-auto mb-6 text-blue-300" size={40} />
              <h4 className="text-2xl font-bold mb-3">Saquarema</h4>
              <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Atendimento humanizado próximo a você na Região dos Lagos.
              </p>
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition w-full"
              >
                <MessageCircle size={18} />
                Agendar em Saquarema
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Não deixe sua saúde para depois.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Se você sente desconforto respiratório ou precisa de uma avaliação especializada, o Dr. Rodrigo está pronto para ajudar.
          </p>
          <div className="flex flex-col items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-5 rounded-full font-bold shadow-green-200 shadow-xl transition transform hover:scale-105 inline-flex items-center gap-3 animate-pulse-slow"
            >
              <MessageCircle size={28} />
              Agendar Consulta Agora
            </a>
            <p className="mt-6 text-gray-500 flex items-center gap-2">
              <Phone size={16} /> Central de Agendamento: <span className="font-semibold text-gray-700">(21) 96699-9895</span>
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Coluna 1: Logo e Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-white">
              <Stethoscope size={24} className="text-blue-500" />
              <h5 className="font-bold text-lg">Dr. Rodrigo Gonçalves</h5>
            </div>
            <p className="text-sm text-gray-500">Médico Pneumologista e Cirurgião Torácico</p>
            <p className="text-sm font-medium text-gray-500 mt-1">CRM-RJ 105635-2</p>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Redes Sociais</span>
              <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/drrodrigo_goncalves/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[#E1306C] transition-all duration-300 transform hover:scale-110"
                  >
                      <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all duration-300 transform hover:scale-110">
                      <Facebook size={20} />
                  </a>
              </div>
          </div>
          
          {/* Coluna 3: Contato */}
          <div className="flex flex-col items-center md:items-end space-y-2">
             <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                <Phone size={18} className="text-green-400" /> 
                <span className="text-white font-medium tracking-wide">(21) 96699-9895</span>
             </div>
             <p className="text-xs text-gray-600 mt-4">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrRodrigoLandingPage;