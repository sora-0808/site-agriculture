import React from 'react';
import { Cloud, Thermometer, Droplets, Wind, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent">
                  AgriClimat
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-700">
                  Votre partenaire agricole intelligent
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Optimisez vos récoltes grâce aux prévisions météorologiques précises, 
                au suivi intelligent de vos cultures et aux informations sur les aides gouvernementales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
                  Commencer maintenant
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
                  Découvrir les fonctionnalités
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Régions couvertes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Surveillance météo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Agriculteurs actifs</div>
                </div>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dakar</h3>
                  <p className="text-gray-600">Aujourd'hui, 14:30</p>
                </div>
                <Cloud className="w-12 h-12 text-blue-500" />
              </div>

              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">28°C</div>
                <p className="text-gray-600">Partiellement nuageux</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <Droplets className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">65%</div>
                  <div className="text-sm text-gray-600">Humidité</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <Wind className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">12 km/h</div>
                  <div className="text-sm text-gray-600">Vent</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold">Conditions favorables pour l'irrigation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;