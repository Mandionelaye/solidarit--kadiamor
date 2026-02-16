
import React, { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert(`Merci de vous être abonné avec ${email}! (Simulation)`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Restez informés</h2>
        <p className="max-w-2xl mx-auto mb-8">Abonnez-vous à notre newsletter pour recevoir nos actualités, témoignages et informations sur nos actions en Casamance.</p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre email"
            className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full whitespace-nowrap transition-colors duration-300"
          >
            S'abonner <i className="fas fa-envelope ml-2"></i>
          </button>
        </form>
        
        <p className="text-sm mt-4 text-green-100">Nous ne partagerons jamais votre email avec des tiers.</p>
      </div>
    </section>
  );
};
