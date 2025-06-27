import React from 'react';
import { Code, BookOpen, Globe, Calculator, Beaker, History, Languages, Cpu } from 'lucide-react';

interface CourseCategoriesProps {
  language: 'fr' | 'wo';
}

const CourseCategories: React.FC<CourseCategoriesProps> = ({ language }) => {
  const translations = {
    fr: {
      title: 'Explorez Nos Cours',
      subtitle: 'Des contenus adaptés pour tous les niveaux',
      viewAll: 'Voir tout',
      courses: 'cours',
      categories: [
        {
          icon: Code,
          title: 'Programmation',
          description: 'Apprenez les bases du code avec Python, JavaScript et plus',
          count: 25,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: Languages,
          title: 'Français',
          description: 'Maîtrisez la langue française et la littérature',
          count: 30,
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: Calculator,
          title: 'Mathématiques',
          description: 'Résolvez des problèmes avec des exemples locaux',
          count: 35,
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Beaker,
          title: 'Sciences',
          description: 'Explorez la physique, chimie et biologie',
          count: 20,
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: History,
          title: 'Histoire',
          description: 'Découvrez l\'histoire du Sénégal et du monde',
          count: 15,
          color: 'from-amber-500 to-yellow-500'
        },
        {
          icon: Globe,
          title: 'Géographie',
          description: 'Explorez le Sénégal et le monde',
          count: 18,
          color: 'from-teal-500 to-green-500'
        },
        {
          icon: Cpu,
          title: 'Technologie',
          description: 'Comprenez le monde numérique d\'aujourd\'hui',
          count: 22,
          color: 'from-indigo-500 to-blue-500'
        },
        {
          icon: BookOpen,
          title: 'Culture Générale',
          description: 'Enrichissez vos connaissances générales',
          count: 28,
          color: 'from-rose-500 to-pink-500'
        }
      ]
    },
    wo: {
      title: 'Gis Sunu Jàngal',
      subtitle: 'Gëstu yu am solo ci ëpp niveau',
      viewAll: 'Gis lépp',
      courses: 'jàngal',
      categories: [
        {
          icon: Code,
          title: 'Programmation',
          description: 'Jàng njàp yu code ak Python, JavaScript...',
          count: 25,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: Languages,
          title: 'Tubaab',
          description: 'Xam tubaab bu baax ak mbind mi',
          count: 30,
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: Calculator,
          title: 'Matematik',
          description: 'Jëfandikoo misaal yu nekk fi',
          count: 35,
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Beaker,
          title: 'Xarala',
          description: 'Gis physique, chimie ak biologie',
          count: 20,
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: History,
          title: 'Taariix',
          description: 'Xam taariix Senegaal ak àdduna',
          count: 15,
          color: 'from-amber-500 to-yellow-500'
        },
        {
          icon: Globe,
          title: 'Geographie',
          description: 'Xam Senegaal ak àdduna',
          count: 18,
          color: 'from-teal-500 to-green-500'
        },
        {
          icon: Cpu,
          title: 'Teknoloogi',
          description: 'Xam àdduna bu diggante bi',
          count: 22,
          color: 'from-indigo-500 to-blue-500'
        },
        {
          icon: BookOpen,
          title: 'Xam-xam bu Bari',
          description: 'Yokku sa xam-xam',
          count: 28,
          color: 'from-rose-500 to-pink-500'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.count} {t.courses}
                  </span>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                    {t.viewAll} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;