
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CampaignSlider } from './components/CampaignSlider';
import { About } from './components/About';
import { Actions } from './components/Actions';
import { News } from './components/News';
import { DonationForm } from './components/DonationForm';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { NewsletterForm } from './components/NewsletterForm';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import { DonationSuccessModal } from './components/DonationSuccessModal';

const App: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [requestedTaxReceipt, setRequestedTaxReceipt] = useState(false);

  const handleDonationSuccess = (hasRequestedTaxReceipt: boolean) => {
    setRequestedTaxReceipt(hasRequestedTaxReceipt);
    setIsDonationModalOpen(true);
  };

  const handleCloseDonationModal = () => {
    setIsDonationModalOpen(false);
    setRequestedTaxReceipt(false); // Reset the state when modal closes
  };

  return (
    <>
      <Header />
      <Hero />
      <CampaignSlider />
      <About />
      <Actions />
      <News />
      <DonationForm onDonationSuccess={handleDonationSuccess} />
      <Testimonials />
      <Gallery />
      <Contact />
      <div className="h-96 w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.123456789012!2d-16.271234!3d12.564738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMzJzUzLjEiTiAxNsKwMTYnMTYuNCJX!5e0!3m2!1sfr!2ssn!4v1624567890123!5m2!1sfr!2ssn"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Kadiamor, Casamance, Senegal"
        ></iframe>
      </div>
      <NewsletterForm />
      <Footer />
      <BackToTopButton />
      <DonationSuccessModal isOpen={isDonationModalOpen} onClose={handleCloseDonationModal} hasRequestedTaxReceipt={requestedTaxReceipt} />
    </>
  );
};

export default App;