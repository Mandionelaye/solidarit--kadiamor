
import React from 'react';

interface NewsCardProps {
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, readTime, title, description, link }) => (
  <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span><i className="far fa-calendar-alt mr-1"></i> {date}</span>
        <span className="mx-2">•</span>
        <span><i className="far fa-clock mr-1"></i> {readTime} de lecture</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-green-700">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-green-600 font-medium hover:underline inline-flex items-center">
        Lire la suite <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  </div>
);

export const News: React.FC = () => {
  const newsData = [
    {
      image: 'https://picsum.photos/1472/800?random=8',
      date: '15 juin 2023',
      readTime: '2 min',
      title: 'Inauguration d\'un nouveau point de lecture à Kadiamor',
      description: 'Nous avons le plaisir d\'annoncer l\'ouverture de notre 5ème point de lecture dans le village de Kadiamor, grâce au soutien de nos donateurs.',
      link: '#news',
    },
    {
      image: 'https://picsum.photos/1471/800?random=9',
      date: '2 juin 2023',
      readTime: '3 min',
      title: 'Première session de formation numérique pour 20 jeunes',
      description: 'Notre programme de formation aux outils numériques a débuté avec une première cohorte de 20 jeunes motivés.',
      link: '#news',
    },
    {
      image: 'https://picsum.photos/1422/800?random=10',
      date: '18 mai 2023',
      readTime: '4 min',
      title: 'Nouveau partenariat avec une école locale',
      description: 'Nous sommes heureux d\'annoncer notre nouveau partenariat avec l\'école élémentaire de Kadiamor pour renforcer notre programme de soutien scolaire.',
      link: '#news',
    },
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Actualités</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((newsItem, index) => (
            <NewsCard key={index} {...newsItem} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#news" className="inline-block border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Voir toutes les actualités <i className="fas fa-newspaper ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
