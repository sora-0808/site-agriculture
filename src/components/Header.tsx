import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Cloud, Sprout, Users, HelpCircle, LogOut } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  currentUser: any;
  onAuthClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, currentUser, onAuthClick, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 via-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AgriClimat</h1>
              <p className="text-xs text-green-600">Sénégal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
              <Cloud className="w-4 h-4" />
              <span>Météo</span>
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
              <Sprout className="w-4 h-4" />
              <span>Mes Cultures</span>
            </Link>
            <a href="#aid" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Aides Gouvernementales
            </a>
            <a href="#forum" className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Forum</span>
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                    {currentUser?.name || 'Agriculteur'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Se connecter
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2">
                <Cloud className="w-4 h-4" />
                <span>Météo</span>
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2">
                <Sprout className="w-4 h-4" />
                <span>Mes Cultures</span>
              </Link>
              <a href="#aid" className="text-gray-700 hover:text-green-600 transition-colors">
                Aides Gouvernementales
              </a>
              <a href="#forum" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Forum</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;