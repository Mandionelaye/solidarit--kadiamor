
import React, { useState } from 'react';

interface DonationFormProps {
  onDonationSuccess: (hasRequestedTaxReceipt: boolean) => void;
}

export const DonationForm: React.FC<DonationFormProps> = ({ onDonationSuccess }) => {
  const [amount, setAmount] = useState<number | string>('');
  const [frequency, setFrequency] = useState('once');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [taxReceipt, setTaxReceipt] = useState(true);

  const predefinedAmounts = [10, 20, 50, 100];
  const paymentMethodsData = [
    { name: 'Wave', img: 'https://picsum.photos/60/30?text=Wave', type: 'Mobile Money', value: 'wave' },
    { name: 'Orange', img: 'https://picsum.photos/60/30?text=Orange', type: 'Mobile Money', value: 'orange' },
    { name: 'Stripe', img: 'https://picsum.photos/60/30?text=Stripe', type: 'Carte bancaire', value: 'stripe' },
    { name: 'PayPal', img: 'https://picsum.photos/60/30?text=PayPal', type: 'PayPal', value: 'paypal' },
  ];

  const handleAmountButtonClick = (value: number) => {
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    // For now, we simulate success and open the modal
    console.log({
      amount,
      frequency,
      paymentMethod,
      firstName,
      lastName,
      email,
      newsletter,
      taxReceipt,
    });
    onDonationSuccess(taxReceipt); // Pass the taxReceipt status
    // Optionally reset form fields
    setAmount('');
    setFrequency('once');
    setPaymentMethod(null);
    setFirstName('');
    setLastName('');
    setEmail('');
    setNewsletter(false);
    setTaxReceipt(true);
  };

  return (
    <section id="donate" className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nous Soutenir</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Votre don fait la différence</h3>
            <p className="mb-6">Chaque contribution, quelle que soit sa taille, nous permet de poursuivre nos actions en faveur de l'éducation en Casamance. Voici ce que votre don peut permettre :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-400 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-book"></i>
                  </div>
                  <h4 className="font-bold">10€</h4>
                </div>
                <p>Permet d'acheter 2 livres pour nos points de lecture</p>
              </div>
              <div className="bg-green-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-400 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <h4 className="font-bold">50€</h4>
                </div>
                <p>Finance une heure de formation numérique pour 5 jeunes</p>
              </div>
              <div className="bg-green-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-400 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-school"></i>
                  </div>
                  <h4 className="font-bold">100€</h4>
                </div>
                <p>Prend en charge le soutien scolaire d'un enfant pendant un mois</p>
              </div>
              <div className="bg-green-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-yellow-400 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <i className="fas fa-home"></i>
                  </div>
                  <h4 className="font-bold">500€</h4>
                </div>
                <p>Contribue à l'installation d'un nouveau point de lecture</p>
              </div>
            </div>
            
            <p className="text-sm">Solidarité Kadiamor est une association à but non lucratif. Vos dons sont déductibles des impôts dans la limite de la législation en vigueur.</p>
          </div>
          
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Faire un don</h3>
            
            <form id="donation-form" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Montant du don (€)</label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {predefinedAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`amount-btn border rounded py-2 px-4 transition-colors duration-200
                        ${amount === val ? 'bg-green-100 border-green-500 text-green-800' : 'bg-gray-100 hover:bg-green-100 border-gray-300'}`}
                      onClick={() => handleAmountButtonClick(val)}
                    >
                      {val}€
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min="1"
                  step="1"
                  placeholder="Autre montant"
                  className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">Fréquence</label>
                <select
                  id="frequency"
                  name="frequency"
                  className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                >
                  <option value="once">Don unique</option>
                  <option value="monthly">Mensuel</option>
                  <option value="quarterly">Trimestriel</option>
                  <option value="yearly">Annuel</option>
                </select>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Méthode de paiement</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {paymentMethodsData.map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      className={`payment-method border rounded py-2 px-4 flex flex-col items-center transition-colors duration-200
                        ${paymentMethod === method.value ? 'bg-green-100 border-green-500 text-green-800' : 'bg-gray-100 hover:bg-green-100 border-gray-300'}`}
                      onClick={() => setPaymentMethod(method.value)}
                    >
                      <img src={method.img} alt={method.name} className="h-6 mb-1" />
                      <span className="text-xs">{method.type}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div id="donor-info" className="space-y-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700">Informations personnelles</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded py-2 px-4 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-medium text-gray-700">Je souhaite recevoir les actualités de Solidarité Kadiamor</label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="tax-receipt"
                      name="tax-receipt"
                      type="checkbox"
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                      checked={taxReceipt}
                      onChange={(e) => setTaxReceipt(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="tax-receipt" className="font-medium text-gray-700">Je souhaite recevoir un reçu fiscal (pour déduction d'impôts)</label>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full donate-btn bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Faire un don maintenant <i className="fas fa-heart ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};