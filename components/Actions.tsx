
import React from 'react';

interface ActionCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ image, title, description, tags, link }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-green-700">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className="text-green-600 font-medium hover:underline inline-flex items-center">
        Voir les réalisations <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
);

export const Actions: React.FC = () => {
  const actionsData = [
    {
      image: 'https://picsum.photos/1470/800?random=5',
      title: 'Points de Lecture',
      description: 'Nous installons et animons des bibliothèques de proximité dans les villages de Casamance pour favoriser l\'accès à la lecture et à la culture.',
      tags: ['Éducation', 'Culture', 'Communauté'],
      link: '#actions',
    },
    {
      image: 'https://picsum.photos/1470/800?random=6',
      title: 'Soutien Scolaire',
      description: 'Nos programmes d\'accompagnement scolaire aident les jeunes à surmonter leurs difficultés et à réussir leur parcours éducatif.',
      tags: ['Éducation', 'Réussite', 'Mentorat'],
      link: '#actions',
    },
    {
      image: 'https://picsum.photos/1470/800?random=7',
      title: 'Formation Numérique',
      description: 'Nous formons les jeunes aux outils numériques essentiels pour leur insertion professionnelle dans un monde de plus en plus digitalisé.',
      tags: ['Technologie', 'Compétences', 'Emploi'],
      link: '#actions',
    },
  ];

  return (
    <section id="actions" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Nos Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actionsData.map((action, index) => (
            <ActionCard key={index} {...action} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#actions" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Voir toutes nos actions <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
