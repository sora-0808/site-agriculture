import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Sprout } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 via-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgriClimat Sénégal</h3>
                <p className="text-sm text-gray-400">Votre partenaire agricole intelligent</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Plateforme dédiée aux agriculteurs sénégalais pour optimiser leurs récoltes grâce aux 
              prévisions météorologiques, au suivi intelligent des cultures et aux informations sur les aides gouvernementales.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">contact@agriclimat.sn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+221 77 123 45 67</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <nav className="space-y-3">
              <a href="#weather" className="block text-gray-300 hover:text-green-400 transition-colors">
                Prévisions Météo
              </a>
              <a href="#crops" className="block text-gray-300 hover:text-green-400 transition-colors">
                Suivi des Cultures
              </a>
              <a href="#aid" className="block text-gray-300 hover:text-green-400 transition-colors">
                Aides Gouvernementales
              </a>
              <a href="#forum" className="block text-gray-300 hover:text-green-400 transition-colors">
                Forum Communautaire
              </a>
              <a href="/dashboard" className="block text-gray-300 hover:text-green-400 transition-colors">
                Tableau de Bord
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">
                Centre d'Aide
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">
                Guide d'Utilisation
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">
                Nous Contacter
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors">
                Signaler un Problème
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Restez Informé</h3>
            <p className="text-gray-300">
              Recevez les dernières informations météo, conseils agricoles et alertes importantes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              S'abonner
            </button>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">© 2024 AgriClimat Sénégal. Tous droits réservés.</p>
              <p className="text-sm text-green-400 mt-1">
                Développé avec 💚 pour les agriculteurs du Sénégal
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 mr-2">Suivez-nous :</span>
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
                { icon: Youtube, href: '#', color: 'hover:text-red-500' }
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`text-gray-400 ${color} transition-colors`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;