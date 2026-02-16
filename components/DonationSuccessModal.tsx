
import React from 'react';

interface DonationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasRequestedTaxReceipt?: boolean;
}

export const DonationSuccessModal: React.FC<DonationSuccessModalProps> = ({ isOpen, onClose, hasRequestedTaxReceipt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">Merci pour votre don !</h3>
          <p className="text-gray-700 mb-4">Votre contribution nous aide à poursuivre nos actions en faveur de l'éducation en Casamance. Un email de confirmation vous a été envoyé.</p>
          {hasRequestedTaxReceipt && (
            <p className="text-gray-700 mb-6">Votre reçu fiscal sera également envoyé à votre adresse email sous peu.</p>
          )}
          <button
            id="close-modal"
            onClick={onClose}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};