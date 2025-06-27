import React, { useState } from 'react';
import { FileText, Truck, Package, CheckCircle, Clock, AlertCircle, Download, ExternalLink } from 'lucide-react';

const GovernmentAid: React.FC = () => {
  const [activeTab, setActiveTab] = useState('subsidies');

  const subsidies = [
    {
      title: 'Programme National d\'Autosuffisance en Riz (PNAR)',
      description: 'Subventions pour la production rizicole et l\'amélioration des rendements',
      amount: '50,000 - 500,000 FCFA',
      deadline: '31 Décembre 2024',
      status: 'Ouvert',
      requirements: ['Être agriculteur déclaré', 'Avoir une superficie minimale de 0.5 ha', 'Présenter un plan de culture']
    },
    {
      title: 'Fonds d\'Appui au Secteur Agricole (FASA)',
      description: 'Financement pour l\'acquisition d\'équipements agricoles modernes',
      amount: '100,000 - 2,000,000 FCFA',
      deadline: '15 Janvier 2025',
      status: 'Ouvert',
      requirements: ['Justifier d\'une expérience de 3 ans', 'Présenter un business plan', 'Avoir un compte bancaire']
    },
    {
      title: 'Programme d\'Urgence de Développement Communautaire (PUDC)',
      description: 'Soutien aux projets agricoles communautaires et coopératives',
      amount: '500,000 - 5,000,000 FCFA',
      deadline: '28 Février 2025',
      status: 'Bientôt',
      requirements: ['Être membre d\'une coopérative', 'Projet collectif validé', 'Contribution propre de 20%']
    }
  ];

  const fertilizers = [
    {
      type: 'NPK 15-15-15',
      price: '18,500 FCFA/sac 50kg',
      subsidizedPrice: '12,000 FCFA/sac 50kg',
      availability: 'Disponible',
      locations: ['Kaolack', 'Thiès', 'Fatick']
    },
    {
      type: 'Urée 46%',
      price: '22,000 FCFA/sac 50kg',
      subsidizedPrice: '15,500 FCFA/sac 50kg',
      availability: 'Stock limité',
      locations: ['Dakar', 'Saint-Louis', 'Louga']
    },
    {
      type: 'DAP 18-46-0',
      price: '25,000 FCFA/sac 50kg',
      subsidizedPrice: '17,500 FCFA/sac 50kg',
      availability: 'Disponible',
      locations: ['Tambacounda', 'Kolda', 'Sédhiou']
    }
  ];

  const transportAid = [
    {
      route: 'Kaolack - Dakar',
      subsidy: '2,000 FCFA/tonne',
      conditions: 'Minimum 5 tonnes',
      contact: '+221 77 123 45 67'
    },
    {
      route: 'Thiès - Dakar',
      subsidy: '1,500 FCFA/tonne',
      conditions: 'Minimum 3 tonnes',
      contact: '+221 76 987 65 43'
    },
    {
      route: 'Saint-Louis - Dakar',
      subsidy: '3,000 FCFA/tonne',
      conditions: 'Minimum 10 tonnes',
      contact: '+221 78 456 12 34'
    }
  ];

  const applications = [
    {
      id: 'APP001',
      program: 'PNAR 2024',
      status: 'En cours',
      submittedDate: '15 Nov 2024',
      amount: '150,000 FCFA'
    },
    {
      id: 'APP002',
      program: 'FASA Équipement',
      status: 'Approuvé',
      submittedDate: '02 Oct 2024',
      amount: '800,000 FCFA'
    }
  ];

  return (
    <section id="aid" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aides Gouvernementales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accédez aux subventions, engrais subventionnés et aides au transport pour optimiser votre activité agricole
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2">
          {[
            { id: 'subsidies', label: 'Subventions', icon: FileText },
            { id: 'fertilizers', label: 'Engrais', icon: Package },
            { id: 'transport', label: 'Transport', icon: Truck },
            { id: 'applications', label: 'Mes Demandes', icon: CheckCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Subsidies Tab */}
        {activeTab === 'subsidies' && (
          <div className="space-y-8">
            {subsidies.map((subsidy, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{subsidy.title}</h3>
                    <p className="text-gray-600">{subsidy.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      subsidy.status === 'Ouvert' ? 'bg-green-100 text-green-800' :
                      subsidy.status === 'Bientôt' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {subsidy.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Montant</h4>
                    <p className="text-green-600 font-bold text-lg">{subsidy.amount}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Date limite</h4>
                    <p className="text-red-600 font-medium">{subsidy.deadline}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Statut</h4>
                    <p className="font-medium">{subsidy.status}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Conditions d'éligibilité</h4>
                  <ul className="space-y-2">
                    {subsidy.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Faire une demande</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Télécharger le dossier</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fertilizers Tab */}
        {activeTab === 'fertilizers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fertilizers.map((fertilizer, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{fertilizer.type}</h3>
                  <Package className="w-6 h-6 text-green-600" />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Prix normal</p>
                    <p className="text-lg font-semibold text-gray-400 line-through">{fertilizer.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Prix subventionné</p>
                    <p className="text-2xl font-bold text-green-600">{fertilizer.subsidizedPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Disponibilité</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      fertilizer.availability === 'Disponible' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {fertilizer.availability}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Points de vente</p>
                  <div className="flex flex-wrap gap-2">
                    {fertilizer.locations.map((location, locIndex) => (
                      <span key={locIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-sm">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                  Commander maintenant
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Transport Tab */}
        {activeTab === 'transport' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportAid.map((transport, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{transport.route}</h3>
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Subvention</p>
                    <p className="text-2xl font-bold text-blue-600">{transport.subsidy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Conditions</p>
                    <p className="font-medium text-gray-900">{transport.conditions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Contact</p>
                    <p className="font-medium text-gray-900">{transport.contact}</p>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Demander le transport
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{app.program}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>ID: {app.id}</span>
                      <span>Soumis le: {app.submittedDate}</span>
                      <span>Montant: {app.amount}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      app.status === 'Approuvé' ? 'bg-green-100 text-green-800' :
                      app.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {app.status}
                    </span>
                    <button className="text-green-600 hover:text-green-700">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GovernmentAid;