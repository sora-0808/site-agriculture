import React from 'react';
import { Users, Award, BookOpen, MessageCircle, Calendar, Video } from 'lucide-react';

interface TeachersSectionProps {
  language: 'fr' | 'wo';
}

const TeachersSection: React.FC<TeachersSectionProps> = ({ language }) => {
  const translations = {
    fr: {
      title: 'Espace Enseignants',
      subtitle: 'Ressources et outils pour enrichir votre enseignement',
      joinCommunity: 'Rejoindre la Communauté',
      downloadResources: 'Télécharger Ressources',
      features: [
        {
          icon: BookOpen,
          title: 'Ressources Pédagogiques',
          description: 'Fiches de cours, exercices et évaluations prêts à utiliser'
        },
        {
          icon: Video,
          title: 'Formations en Ligne',
          description: 'Webinaires et formations pour maîtriser les outils numériques'
        },
        {
          icon: Users,
          title: 'Communauté',
          description: 'Échangez avec d\'autres enseignants du Sénégal'
        },
        {
          icon: Award,
          title: 'Certifications',
          description: 'Obtenez des certifications en pédagogie numérique'
        },
        {
          icon: Calendar,
          title: 'Planification',
          description: 'Outils pour organiser vos cours et suivre les progrès'
        },
        {
          icon: MessageCircle,
          title: 'Support',
          description: 'Assistance technique et pédagogique disponible 24/7'
        }
      ],
      testimonials: [
        {
          name: 'Aminata Diallo',
          role: 'Professeure de Mathématiques',
          school: 'Lycée Blaise Diagne',
          quote: 'Cette plateforme a révolutionné ma façon d\'enseigner. Mes élèves sont plus engagés!',
          avatar: 'https://images.pexels.com/photos/8471876/pexels-photo-8471876.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
          name: 'Moussa Fall',
          role: 'Professeur d\'Histoire',
          school: 'Collège Kennedy',
          quote: 'Les ressources culturelles sont parfaitement adaptées à notre contexte sénégalais.',
          avatar: 'https://images.pexels.com/photos/8992924/pexels-photo-8992924.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ]
    },
    wo: {
      title: 'Meñu Jàngalekat',
      subtitle: 'Jumtukaay ak bërëb ngir yokku sa jàngale',
      joinCommunity: 'Dugg ci Mbooleem',
      downloadResources: 'Télécharger Jumtukaay',
      features: [
        {
          icon: BookOpen,
          title: 'Jumtukaay Jàngale',
          description: 'Njàp, nataal ak kontrole yu am solo'
        },
        {
          icon: Video,
          title: 'Formation ci Internet',
          description: 'Webinaire ak formation ngir xam bërëb diggante'
        },
        {
          icon: Users,
          title: 'Mbooleem',
          description: 'Wàxtaan ak jàngalekat yu ëpp ci Senegaal'
        },
        {
          icon: Award,
          title: 'Sertifikat',
          description: 'Mën na am sertifikat ci jàngale bu diggante'
        },
        {
          icon: Calendar,
          title: 'Programa',
          description: 'Bërëb ngir organiser sa jàngal'
        },
        {
          icon: MessageCircle,
          title: 'Support',
          description: 'Ndimbal teknik ak jàngale 24/7'
        }
      ],
      testimonials: [
        {
          name: 'Ami Diallo',
          role: 'Jàngalekat Matematik',
          school: 'Lycée Blaise Diagne',
          quote: 'Platformu bi soppi sama yoon jàngale. Sama jàngalekat ñu gëna metti!',
          avatar: 'https://images.pexels.com/photos/8471876/pexels-photo-8471876.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
          name: 'Muusa Fall',
          role: 'Jàngalekat Taariix',
          school: 'Collège Kennedy',
          quote: 'Jumtukaay aadama yu solo na ci sunu jikko Senegaal.',
          avatar: 'https://images.pexels.com/photos/8992924/pexels-photo-8992924.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'fr' 
                ? 'Rejoignez plus de 500 enseignants déjà inscrits'
                : 'Dugg ak jàngalekat 500 yu ngi nii ci platformu bi'
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'fr'
                ? 'Accédez gratuitement à toutes nos ressources et formations'
                : 'Mën nga jëf lépp sunu jumtukaay ak formation yu fépp'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                {t.joinCommunity}
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors">
                {t.downloadResources}
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-green-600">{testimonial.school}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;