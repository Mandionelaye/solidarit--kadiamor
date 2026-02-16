
import React, { useState } from 'react';

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="bg-green-100 p-3 rounded-full mr-4">
      <i className={`${icon} text-green-700 text-xl`}></i>
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-700">{content}</p>
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! (This is a simulation)');
    // In a real app, integrate with a backend for sending emails and reCAPTCHA verification.
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false,
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Contactez-nous</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Nos coordonnées</h3>
            
            <div className="space-y-6">
              <ContactInfoItem icon="fas fa-map-marker-alt" title="Adresse" content="Bignona, Kadiamor zone 6 près de l'orphelinat" />
              <ContactInfoItem icon="fas fa-envelope" title="Email" content="solidarite@kadiamor.org" />
              <ContactInfoItem icon="fas fa-phone-alt" title="Téléphone" content="+221 77 123 45 67" />
              <ContactInfoItem icon="fas fa-clock" title="Horaires" content="Lundi au vendredi : 9h - 17h" />
            </div>
            
            <h3 className="text-2xl font-bold mt-10 mb-6 text-green-700">Suivez-nous</h3>
            
            <div className="flex space-x-4">
              <a href="#" className="social-icon bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-icon bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Envoyez-nous un message</h3>
            
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    type="text"
                    id="contact-firstname"
                    name="firstName"
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contact-lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    id="contact-lastname"
                    name="lastName"
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="donation">Question sur les dons</option>
                  <option value="volunteer">Devenir bénévole</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="contact-newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="contact-newsletter" className="font-medium text-gray-700">Je souhaite recevoir les actualités de Solidarité Kadiamor</label>
                </div>
              </div>
              
              {/* reCAPTCHA placeholder */}
              <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600">
                reCAPTCHA placeholder (implementation requires a site key and backend verification)
                <div className="g-recaptcha" data-sitekey="your_site_key"></div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Envoyer le message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
