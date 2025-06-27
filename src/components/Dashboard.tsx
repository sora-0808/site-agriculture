import React from 'react';
import { BarChart3, TrendingUp, AlertTriangle, Calendar, Sprout, Cloud } from 'lucide-react';

interface DashboardProps {
  isAuthenticated: boolean;
  currentUser: any;
}

const Dashboard: React.FC<DashboardProps> = ({ isAuthenticated, currentUser }) => {
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accès restreint</h2>
          <p className="text-gray-600 mb-6">Vous devez être connecté pour accéder à votre tableau de bord.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    { title: 'Cultures actives', value: '3', icon: Sprout, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Surface totale', value: '7.5 ha', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Alertes actives', value: '2', icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { title: 'Prochaine récolte', value: '15 jours', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const recentActivities = [
    { date: '25 Nov', action: 'Irrigation du mil', status: 'Terminé' },
    { date: '23 Nov', action: 'Fertilisation arachide', status: 'Terminé' },
    { date: '20 Nov', action: 'Traitement maïs', status: 'Terminé' },
    { date: '18 Nov', action: 'Semis haricot', status: 'En cours' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Bienvenue, {currentUser?.name || 'Agriculteur'} ! Voici un aperçu de vos activités agricoles.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weather Widget */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Météo Locale</h3>
              <Cloud className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-gray-900 mb-2">28°C</div>
              <p className="text-gray-600">Partiellement nuageux</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-blue-600">65%</div>
                <div className="text-sm text-gray-600">Humidité</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-600">12 km/h</div>
                <div className="text-sm text-gray-600">Vent</div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Activités Récentes</h3>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Actions Rapides</h3>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Ajouter une activité
              </button>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Voir les prévisions
              </button>
              <button className="w-full bg-yellow-600 text-white py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors">
                Demander une aide
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Contacter un expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;