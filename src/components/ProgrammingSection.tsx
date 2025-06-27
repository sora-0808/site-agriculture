import React from 'react';
import { Code, Terminal, Smartphone, Database, Globe, Cpu } from 'lucide-react';

interface ProgrammingSectionProps {
  language: 'fr' | 'wo';
}

const ProgrammingSection: React.FC<ProgrammingSectionProps> = ({ language }) => {
  const translations = {
    fr: {
      title: 'Maîtrisez la Programmation',
      subtitle: 'Construisez votre avenir numérique étape par étape',
      startCoding: 'Commencer à Coder',
      viewPath: 'Voir le Parcours',
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      tracks: [
        {
          icon: Code,
          title: 'Développement Web',
          description: 'HTML, CSS, JavaScript et frameworks modernes',
          level: 'Débutant',
          duration: '12 semaines',
          projects: 8,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: Smartphone,
          title: 'Applications Mobile',
          description: 'React Native et développement cross-platform',
          level: 'Intermédiaire',
          duration: '16 semaines',
          projects: 6,
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Database,
          title: 'Data Science',
          description: 'Python, analyse de données et machine learning',
          level: 'Intermédiaire',
          duration: '20 semaines',
          projects: 10,
          color: 'from-green-500 to-teal-500'
        },
        {
          icon: Globe,
          title: 'Développement Backend',
          description: 'Node.js, APIs et architecture serveur',
          level: 'Avancé',
          duration: '18 semaines',
          projects: 7,
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    wo: {
      title: 'Xam Programmation',
      subtitle: 'Samp sa kawu diggante ci njàpp-njàpp',
      startCoding: 'Tambali Code',
      viewPath: 'Gis Yoon',
      beginner: 'Tambali',
      intermediate: 'Sàkk',
      advanced: 'Xam na',
      tracks: [
        {
          icon: Code,
          title: 'Web Development',
          description: 'HTML, CSS, JavaScript ak framework yu bees',
          level: 'Tambali',
          duration: '12 ayubés',
          projects: 8,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: Smartphone,
          title: 'Application Mobile',
          description: 'React Native ak cross-platform',
          level: 'Sàkk',
          duration: '16 ayubés',
          projects: 6,
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Database,
          title: 'Data Science',
          description: 'Python, jëfandikoo data ak machine learning',
          level: 'Sàkk',
          duration: '20 ayubés',
          projects: 10,
          color: 'from-green-500 to-teal-500'
        },
        {
          icon: Globe,
          title: 'Backend Development',
          description: 'Node.js, API ak architecture serveur',
          level: 'Xam na',
          duration: '18 ayubés',
          projects: 7,
          color: 'from-orange-500 to-red-500'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="programming" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.tracks.map((track, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${track.color} p-4 group-hover:scale-110 transition-transform`}>
                    <track.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {track.level}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{track.title}</h3>
                <p className="text-gray-300 mb-6">{track.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-700 rounded-xl">
                    <div className="text-2xl font-bold text-green-400 mb-1">{track.duration}</div>
                    <div className="text-gray-400 text-sm">
                      {language === 'fr' ? 'Durée' : 'Ndeey'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-700 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">{track.projects}</div>
                    <div className="text-gray-400 text-sm">
                      {language === 'fr' ? 'Projets' : 'Projets'}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-yellow-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-yellow-700 transition-all">
                    {t.startCoding}
                  </button>
                  <button className="border border-gray-600 text-gray-300 py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition-all">
                    {t.viewPath}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Demo */}
        <div className="mt-16 bg-gray-800 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gray-700">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 font-mono">
                {language === 'fr' ? 'exemple_senegal.py' : 'misaal_senegal.py'}
              </span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="text-gray-500"># {language === 'fr' ? 'Calculer le prix du riz au marché Sandaga' : 'Jëfandikoo ñam ceeb ci marché Sandaga'}</div>
            <div className="text-blue-400">def <span className="text-yellow-400">calculer_prix_riz</span>(<span className="text-red-400">quantite_kg</span>):</div>
            <div className="ml-4 text-gray-300">prix_par_kg = <span className="text-green-400">650</span>  <span className="text-gray-500"># {language === 'fr' ? 'Prix en FCFA' : 'Jënd ci FCFA'}</span></div>
            <div className="ml-4 text-purple-400">return</div> <span className="text-gray-300">quantite_kg * prix_par_kg</span>
            <div className="mt-4 text-gray-500"># {language === 'fr' ? 'Exemple d\'utilisation' : 'Misaal bu jëfandikoo'}</div>
            <div className="text-gray-300">total = calculer_prix_riz(<span className="text-green-400">5</span>)</div>
            <div className="text-blue-400">print</div><span className="text-gray-300">(</span><span className="text-green-400">{'f"Prix pour 5kg: {total} FCFA"'}</span><span className="text-gray-300">)</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSection;