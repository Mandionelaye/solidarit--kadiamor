
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Qui sommes-nous ?</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src="https://picsum.photos/1470/800?random=4" alt="Équipe Solidarité Kadiamor" className="rounded-xl shadow-lg w-full" />
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Notre Mission</h3>
            <p className="text-gray-700 mb-6">Solidarité Kadiamor œuvre en Casamance (Sénégal) pour promouvoir l'éducation et le développement à travers des actions concrètes : installation de points de lecture, soutien scolaire et formations numériques.</p>
            
            <h3 className="text-2xl font-bold mb-4 text-green-700">Notre Vision</h3>
            <p className="text-gray-700 mb-6">Nous croyons en un avenir où chaque enfant de Casamance a accès à une éducation de qualité et aux outils nécessaires pour réussir dans un monde en constante évolution.</p>
            
            <h3 className="text-2xl font-bold mb-4 text-green-700">Nos Valeurs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <i className="fas fa-hands-helping text-green-600 text-2xl mb-2"></i>
                <h4 className="font-bold text-green-700">Solidarité</h4>
                <p className="text-gray-700">Nous agissons ensemble pour le bien commun.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <i className="fas fa-book-open text-green-600 text-2xl mb-2"></i>
                <h4 className="font-bold text-green-700">Éducation</h4>
                <p className="text-gray-700">L'éducation est au cœur de nos actions.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <i className="fas fa-lightbulb text-green-600 text-2xl mb-2"></i>
                <h4 className="font-bold text-green-700">Innovation</h4>
                <p className="text-gray-700">Nous intégrons les nouvelles technologies.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <i className="fas fa-map-marker-alt text-green-600 text-2xl mb-2"></i>
                <h4 className="font-bold text-green-700">Ancrage local</h4>
                <p className="text-gray-700">Nos solutions sont adaptées au contexte local.</p>
              </div>
            </div>
            
            <a href="#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
