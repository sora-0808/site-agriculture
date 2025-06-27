import React, { useState } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind, Eye, AlertTriangle } from 'lucide-react';

const WeatherSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('dakar');

  const regions = [
    { id: 'dakar', name: 'Dakar', temp: 28, condition: 'Nuageux' },
    { id: 'thies', name: 'Thiès', temp: 26, condition: 'Ensoleillé' },
    { id: 'kaolack', name: 'Kaolack', temp: 32, condition: 'Chaud' },
    { id: 'saint-louis', name: 'Saint-Louis', temp: 24, condition: 'Venteux' },
    { id: 'ziguinchor', name: 'Ziguinchor', temp: 29, condition: 'Humide' },
    { id: 'tambacounda', name: 'Tambacounda', temp: 35, condition: 'Très chaud' }
  ];

  const forecast = [
    { day: 'Aujourd\'hui', temp: 28, icon: Cloud, condition: 'Nuageux', rain: 20 },
    { day: 'Demain', temp: 30, icon: Sun, condition: 'Ensoleillé', rain: 5 },
    { day: 'Mercredi', temp: 27, icon: CloudRain, condition: 'Pluie', rain: 80 },
    { day: 'Jeudi', temp: 25, icon: CloudRain, condition: 'Orageux', rain: 90 },
    { day: 'Vendredi', temp: 29, icon: Sun, condition: 'Ensoleillé', rain: 10 },
    { day: 'Samedi', temp: 31, icon: Sun, condition: 'Chaud', rain: 0 },
    { day: 'Dimanche', temp: 26, icon: Cloud, condition: 'Nuageux', rain: 30 }
  ];

  const alerts = [
    {
      type: 'warning',
      title: 'Alerte Sécheresse',
      message: 'Risque de sécheresse dans la région de Kaolack. Prévoyez l\'irrigation.',
      region: 'Kaolack'
    },
    {
      type: 'info',
      title: 'Conditions Favorables',
      message: 'Excellentes conditions pour la plantation dans la région de Thiès.',
      region: 'Thiès'
    }
  ];

  return (
    <section id="weather" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prévisions Météorologiques
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Données météorologiques précises et alertes personnalisées pour optimiser vos activités agricoles
          </p>
        </div>

        {/* Region Selector */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Sélectionnez votre région
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedRegion === region.id
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-green-300 text-gray-700'
                }`}
              >
                <div className="text-lg font-semibold">{region.name}</div>
                <div className="text-2xl font-bold">{region.temp}°C</div>
                <div className="text-sm">{region.condition}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Weather Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold capitalize">
                    {regions.find(r => r.id === selectedRegion)?.name}
                  </h3>
                  <p className="text-blue-100">Conditions actuelles</p>
                </div>
                <Cloud className="w-16 h-16 text-white/80" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Thermometer className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl font-bold">28°C</div>
                  <div className="text-sm text-blue-100">Température</div>
                </div>
                <div className="text-center">
                  <Droplets className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl font-bold">65%</div>
                  <div className="text-sm text-blue-100">Humidité</div>
                </div>
                <div className="text-center">
                  <Wind className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl font-bold">12 km/h</div>
                  <div className="text-sm text-blue-100">Vent</div>
                </div>
                <div className="text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-2xl font-bold">10 km</div>
                  <div className="text-sm text-blue-100">Visibilité</div>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Alertes Météo</h3>
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-l-4 ${
                  alert.type === 'warning'
                    ? 'bg-yellow-50 border-yellow-500'
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <AlertTriangle
                    className={`w-5 h-5 mt-0.5 ${
                      alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                    }`}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{alert.region}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Prévisions 7 jours</h3>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {forecast.map((day, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-900 mb-2">{day.day}</div>
                <day.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{day.temp}°C</div>
                <div className="text-sm text-gray-600 mb-2">{day.condition}</div>
                <div className="flex items-center justify-center space-x-1">
                  <Droplets className="w-3 h-3 text-blue-500" />
                  <span className="text-xs text-blue-600">{day.rain}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;