import React from 'react';
import { MapPin, Music, Utensils, Users, Book, Star } from 'lucide-react';

interface CulturalSectionProps {
  language: 'fr' | 'wo';
}

const CulturalSection: React.FC<CulturalSectionProps> = ({ language }) => {
  const translations = {
    fr: {
      title: 'Découvrez la Richesse Culturelle du Sénégal',
      subtitle: 'Explorez votre patrimoine et vos traditions',
      explore: 'Explorer',
      learnMore: 'En savoir plus',
      items: [
        {
          icon: MapPin,
          title: 'Sites Historiques',
          description: 'Île de Gorée, Saint-Louis, Sine-Saloum',
          image: 'https://images.pexels.com/photos/9022631/pexels-photo-9022631.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Music,
          title: 'Musique Traditionnelle',
          description: 'Sabar, Mbalax, Griot et instruments locaux',
          image: 'https://images.pexels.com/photos/6966576/pexels-photo-6966576.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Utensils,
          title: 'Gastronomie',
          description: 'Thiéboudienne, Yassa, Mafé et saveurs locales',
          image: 'https://images.pexels.com/photos/8844885/pexels-photo-8844885.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Users,
          title: 'Figures Inspirantes',
          description: 'Léopold Sédar Senghor, Cheikh Anta Diop',
          image: 'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Book,
          title: 'Langues Nationales',
          description: 'Wolof, Pulaar, Diola, Mandinka et plus',
          image: 'https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Star,
          title: 'Valeurs de la Teranga',
          description: 'Hospitalité, respect et solidarité',
          image: 'https://images.pexels.com/photos/8992916/pexels-photo-8992916.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ]
    },
    wo: {
      title: 'Gis Aadama Senegaal bu Nees',
      subtitle: 'Xam sa aadama ak sa jiko',
      explore: 'Gis',
      learnMore: 'Bëgg na xam',
      items: [
        {
          icon: MapPin,
          title: 'Meñu Taariix',
          description: 'Dun Goree, Ndar, Sine-Saloum',
          image: 'https://images.pexels.com/photos/9022631/pexels-photo-9022631.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Music,
          title: 'Simb bu Cosaan',
          description: 'Sabar, Mbalax, Gewel ak jumtukaay',
          image: 'https://images.pexels.com/photos/6966576/pexels-photo-6966576.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Utensils,
          title: 'Lekk',
          description: 'Ceebu jën, Yassa, Mafé ak ndogalu résew',
          image: 'https://images.pexels.com/photos/8844885/pexels-photo-8844885.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Users,
          title: 'Nit ñu Soxla',
          description: 'Léopold Sédar Senghor, Cheikh Anta Diop',
          image: 'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Book,
          title: 'Làkku Cosaan',
          description: 'Wolof, Pulaar, Joola, Mandinka...',
          image: 'https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          icon: Star,
          title: 'Jikko Teranga',
          description: 'Mbëkk, jogël ak moomeel',
          image: 'https://images.pexels.com/photos/8992916/pexels-photo-8992916.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="culture" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      {t.explore} →
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                      {t.learnMore}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 text-center text-white">
          <blockquote className="text-2xl font-medium mb-4">
            {language === 'fr' 
              ? '"La culture est la base de tout développement véritable"'
              : '"Aadama mooy njàp ci yàqu-yàqu gu dëgg"'
            }
          </blockquote>
          <cite className="text-green-100">
            {language === 'fr' ? '- Cheikh Anta Diop' : '- Cheikh Anta Diop'}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;