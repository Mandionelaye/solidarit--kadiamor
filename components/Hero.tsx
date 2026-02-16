
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#16a085]/90 to-[#27ae60]/90"></div>
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1470/800')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">SOLIDARITE KADIAMOR</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Solidarité Kadiamor œuvre pour l'éducation des jeunes en Casamance à travers des points de lecture, du soutien scolaire et des formations numériques.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#donate" className="inline-block donate-btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Faire un don <i className="fas fa-heart ml-2"></i>
          </a>
          <a href="#actions" className="inline-block bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Nos actions <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-white"></i>
      </a>
    </section>
  );
};