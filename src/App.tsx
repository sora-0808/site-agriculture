import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WeatherSection from './components/WeatherSection';
import CropMonitoring from './components/CropMonitoring';
import GovernmentAid from './components/GovernmentAid';
import CommunityForum from './components/CommunityForum';
import Dashboard from './components/Dashboard';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData: any) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
          onAuthClick={() => setShowAuthModal(true)}
          onLogout={handleLogout}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WeatherSection />
              <CropMonitoring />
              <GovernmentAid />
              <CommunityForum />
            </>
          } />
          <Route path="/dashboard" element={
            <Dashboard 
              isAuthenticated={isAuthenticated}
              currentUser={currentUser}
            />
          } />
        </Routes>

        <Footer />
        
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}

export default App;