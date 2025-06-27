import React, { useState } from 'react';
import { Sprout, Camera, Calendar, TrendingUp, AlertCircle, Plus, Edit3 } from 'lucide-react';

const CropMonitoring: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState('mil');

  const crops = [
    {
      id: 'mil',
      name: 'Mil',
      area: '2.5 ha',
      planted: '15 Juin 2024',
      status: 'Croissance',
      health: 85,
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'arachide',
      name: 'Arachide',
      area: '1.8 ha',
      planted: '20 Juin 2024',
      status: 'Floraison',
      health: 92,
      image: 'image/photo02.jpg'
    },
    {    public/images/photo02.jpg
      id: 'mais',
      name: 'Maïs',
      area: '3.2 ha',
      planted: '10 Juin 2024',
      status: 'Maturation',
      health: 78,
      image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const activities = [
    {
      date: '25 Nov 2024',
      action: 'Irrigation',
      crop: 'Mil',
      notes: 'Irrigation matinale - 2h'
    },
    {
      date: '23 Nov 2024',
      action: 'Fertilisation',
      crop: 'Arachide',
      notes: 'Application d\'engrais NPK'
    },
    {
      date: '20 Nov 2024',
      action: 'Traitement',
      crop: 'Maïs',
      notes: 'Traitement contre les nuisibles'
    }
  ];

  const recommendations = [
    {
      type: 'warning',
      title: 'Attention - Mil',
      message: 'Risque de stress hydrique détecté. Augmentez la fréquence d\'irrigation.',
      priority: 'high'
    },
    {
      type: 'success',
      title: 'Excellent - Arachide',
      message: 'Croissance optimale. Continuez le programme actuel.',
      priority: 'low'
    },
    {
      type: 'info',
      title: 'Conseil - Maïs',
      message: 'Période idéale pour la récolte dans 2-3 semaines.',
      priority: 'medium'
    }
  ];

  return (
    <section id="crops" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Suivi de vos Cultures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Surveillez l'état de vos cultures en temps réel et recevez des recommandations personnalisées
          </p>
        </div>

        {/* Crop Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {crops.map((crop) => (
            <div
              key={crop.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                selectedCrop === crop.id ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => setSelectedCrop(crop.id)}
            >
              <div className="relative">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className={`text-sm font-semibold ${
                    crop.health >= 90 ? 'text-green-600' :
                    crop.health >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {crop.health}% Santé
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{crop.name}</h3>
                  <Sprout className="w-6 h-6 text-green-600" />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Surface:</span>
                    <span className="font-medium">{crop.area}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Planté le:</span>
                    <span className="font-medium">{crop.planted}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Statut:</span>
                    <span className="font-medium text-green-600">{crop.status}</span>
                  </div>
                </div>

                {/* Health Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">État de santé</span>
                    <span className="font-medium">{crop.health}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        crop.health >= 90 ? 'bg-green-500' :
                        crop.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${crop.health}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Voir détails
                  </button>
                  <button className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Crop */}
        <div className="text-center mb-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Ajouter une nouvelle culture</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Activités Récentes</h3>
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">{activity.action}</h4>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{activity.crop}</p>
                    <p className="text-sm text-gray-500">{activity.notes}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 bg-gray-100 text-gray-600 py-3 rounded-xl hover:bg-gray-200 transition-colors font-medium">
              Voir toutes les activités
            </button>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recommandations</h3>
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-l-4 ${
                    rec.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                    rec.type === 'success' ? 'bg-green-50 border-green-500' :
                    'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <AlertCircle
                      className={`w-5 h-5 mt-0.5 ${
                        rec.type === 'warning' ? 'text-yellow-600' :
                        rec.type === 'success' ? 'text-green-600' :
                        'text-blue-600'
                      }`}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{rec.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropMonitoring;