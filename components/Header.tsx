
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#about", label: "Qui sommes-nous ?" },
    { href: "#actions", label: "Nos Actions" },
    { href: "#news", label: "Actualités" },
    { href: "#donate", label: "Nous Soutenir" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://picsum.photos/50/50" alt="Logo Solidarité Kadiamor" className="h-12 w-12 mr-3" />
          <a href="#" className="text-xl font-bold text-green-700">Solidarité Kadiamor</a>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative text-gray-700 hover:text-green-700 group">
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button id="mobile-menu-button" onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={toggleMobileMenu} className="block py-2 text-gray-700 hover:text-green-700">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
