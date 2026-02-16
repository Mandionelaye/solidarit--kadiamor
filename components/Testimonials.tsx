
import React from 'react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  image: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, quote, image, name, title }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="text-yellow-400 text-2xl mr-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <i key={i} className={i < rating ? 'fas fa-star' : 'far fa-star'}></i>
        ))}
      </div>
    </div>
    <p className="text-gray-700 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-bold text-green-700">{name}</h4>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      rating: 5,
      quote: "Grâce au point de lecture de Solidarité Kadiamor, mes enfants ont accès à des livres qu'on ne pourrait jamais s'offrir. C'est une chance inestimable pour leur éducation.",
      image: 'https://picsum.photos/688/800?random=11',
      name: 'Mariama Diallo',
      title: 'Mère de famille, Kadiamor',
    },
    {
      rating: 5,
      quote: "Le soutien scolaire m'a permis de passer en classe supérieure alors que j'avais des difficultés. Les bénévoles sont patients et compétents.",
      image: 'https://picsum.photos/1470/800?random=12',
      name: 'Ibrahima Sane',
      title: 'Élève de 5ème, 14 ans',
    },
    {
      rating: 4.5,
      quote: "La formation numérique m'a donné des compétences qui m'ont permis de trouver un emploi dans une entreprise locale. Un vrai tremplin professionnel !",
      image: 'https://picsum.photos/687/800?random=13',
      name: 'Aïssatou Diatta',
      title: 'Ancienne participante, 22 ans',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Témoignages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
