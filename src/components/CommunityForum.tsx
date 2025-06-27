import React, { useState } from 'react';
import { MessageCircle, Users, ThumbsUp, Reply, Search, Plus, Filter } from 'lucide-react';

const CommunityForum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', count: 156 },
    { id: 'crops', name: 'Cultures', count: 45 },
    { id: 'weather', name: 'Météo', count: 23 },
    { id: 'equipment', name: 'Équipements', count: 18 },
    { id: 'market', name: 'Marché', count: 32 },
    { id: 'help', name: 'Entraide', count: 38 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Meilleure période pour planter le mil cette année ?',
      author: 'Amadou Diallo',
      location: 'Kaolack',
      category: 'crops',
      replies: 12,
      likes: 8,
      timeAgo: '2h',
      isAnswered: true,
      preview: 'Avec les changements climatiques, je me demande quelle est la meilleure période pour planter le mil cette année...'
    },
    {
      id: 2,
      title: 'Partage d\'expérience : irrigation goutte à goutte',
      author: 'Fatou Seck',
      location: 'Thiès',
      category: 'equipment',
      replies: 7,
      likes: 15,
      timeAgo: '4h',
      isAnswered: false,
      preview: 'J\'ai installé un système d\'irrigation goutte à goutte sur mes 2 hectares d\'oignons. Voici mon retour d\'expérience...'
    },
    {
      id: 3,
      title: 'Alerte : chenilles sur les cultures de maïs',
      author: 'Moussa Fall',
      location: 'Tambacounda',
      category: 'crops',
      replies: 23,
      likes: 31,
      timeAgo: '6h',
      isAnswered: true,
      preview: 'Attention aux agriculteurs de la région ! J\'ai observé une invasion de chenilles sur mes plants de maïs...'
    },
    {
      id: 4,
      title: 'Prix de vente de l\'arachide - Campagne 2024',
      author: 'Ibrahima Ndiaye',
      location: 'Fatick',
      category: 'market',
      replies: 18,
      likes: 22,
      timeAgo: '1j',
      isAnswered: false,
      preview: 'Quelqu\'un a-t-il des informations sur les prix de vente de l\'arachide pour cette campagne ?'
    },
    {
      id: 5,
      title: 'Recherche partenaire pour achat groupé d\'engrais',
      author: 'Awa Sarr',
      location: 'Saint-Louis',
      category: 'help',
      replies: 9,
      likes: 12,
      timeAgo: '1j',
      isAnswered: false,
      preview: 'Je cherche des agriculteurs intéressés par un achat groupé d\'engrais pour réduire les coûts...'
    }
  ];

  const topContributors = [
    { name: 'Cheikh Diop', location: 'Dakar', points: 1250, avatar: 'image/profil1.jpg' },
    { name: 'Mariama Ba', location: 'Thiès', points: 980, avatar: 'image/profil02.jpg' },
    { name: 'Omar Sy', location: 'Kaolack', points: 875, avatar: 'image/profil3.jpg' }
  ];

  return (
    <section id="forum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Forum Communautaire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Échangez avec d'autres agriculteurs, partagez vos expériences et trouvez des solutions ensemble
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                      activeCategory === category.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Contributeurs</h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{contributor.name}</h4>
                      <p className="text-xs text-gray-600">{contributor.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">{contributor.points}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher dans les discussions..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Nouvelle discussion</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Filtrer</span>
              </button>
            </div>

            {/* Discussions List */}
            <div className="space-y-6">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 hover:text-green-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        {discussion.isAnswered && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Résolu
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{discussion.preview}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{discussion.author}</span>
                        <span>{discussion.location}</span>
                        <span>{discussion.timeAgo}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {categories.find(c => c.id === discussion.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{discussion.replies} réponses</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{discussion.likes}</span>
                      </button>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      Lire la suite →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Charger plus de discussions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;