
import React from 'react';

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li><a href={href} className="hover:text-green-400 transition-colors duration-200">{label}</a></li>
);

interface SocialIconProps {
  href: string;
  icon: string;
  ariaLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, ariaLabel }) => (
  <a href={href} className="bg-gray-800 hover:bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300" aria-label={ariaLabel}>
    <i className={`${icon} text-sm`}></i>
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Solidarité Kadiamor</h3>
            <p className="mb-4">Œuvrons ensemble pour l'éducation et le développement en Casamance, Sénégal.</p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon="fab fa-facebook-f" ariaLabel="Facebook" />
              <SocialIcon href="#" icon="fab fa-whatsapp" ariaLabel="WhatsApp" />
              <SocialIcon href="#" icon="fab fa-instagram" ariaLabel="Instagram" />
              <SocialIcon href="#" icon="fab fa-youtube" ariaLabel="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink href="#accueil" label="Accueil" />
              <FooterLink href="#about" label="Qui sommes-nous ?" />
              <FooterLink href="#actions" label="Nos Actions" />
              <FooterLink href="#news" label="Actualités" />
              <FooterLink href="#donate" label="Nous Soutenir" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Actions</h3>
            <ul className="space-y-2">
              <FooterLink href="#actions" label="Points de Lecture" />
              <FooterLink href="#actions" label="Soutien Scolaire" />
              <FooterLink href="#actions" label="Formation Numérique" />
              <FooterLink href="#" label="Bénévolat" />
              <FooterLink href="#" label="Partenariats" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2"><i className="fas fa-map-marker-alt mr-2 text-green-400"></i> Bignona, Kadiamor zone 6 près de l'orphelinat</p>
              <p className="mb-2"><i className="fas fa-envelope mr-2 text-green-400"></i> solidarite@kadiamor.org</p>
              <p><i className="fas fa-phone-alt mr-2 text-green-400"></i> +221 77 123 45 67</p>
            </address>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2023 Solidarité Kadiamor. Tous droits réservés.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">Mentions légales</a>
            <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">Politique de confidentialité</a>
            <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
