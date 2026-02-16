
import React from 'react';

interface GalleryItemProps {
  image: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, alt }) => (
  <a href="#gallery" className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
    <img src={image} alt={alt} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
  </a>
);

export const Gallery: React.FC = () => {
  const galleryImages = [
    { image: 'https://picsum.photos/1470/800?random=14', alt: 'Point de lecture' },
    { image: 'https://picsum.photos/1470/800?random=15', alt: 'Soutien scolaire' },
    { image: 'https://picsum.photos/1470/800?random=16', alt: 'Formation numérique' },
    { image: 'https://picsum.photos/1472/800?random=17', alt: 'Équipe' },
    { image: 'https://picsum.photos/1471/800?random=18', alt: 'Bénévoles' },
    { image: 'https://picsum.photos/1422/800?random=19', alt: 'Partenariat' },
    { image: 'https://picsum.photos/1470/800?random=20', alt: 'Événement' },
    { image: 'https://picsum.photos/1470/800?random=21', alt: 'Communauté' },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Galerie</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#gallery" className="inline-block border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Voir toute la galerie <i className="fas fa-images ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
