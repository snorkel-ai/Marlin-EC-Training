import { useState } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import FAQ from './components/FAQ';
import Glossary from './components/Glossary';
import Overview from './components/Overview';
import PRSelection from './components/PRSelection';
import PromptPreparation from './components/PromptPreparation';
import ModelWorkspace from './components/ModelWorkspace';
import RulesAndRequirements from './components/RulesAndRequirements';
import CLI from './components/CLI';
function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const { currentUser, logout } = useAuth();

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  // If not logged in, show login page
  if (!currentUser) {
    return <Login onLoginSuccess={() => setCurrentView('home')} />;
  }

  return (
    <div className="app">
      {currentView === 'home' && <LandingPage onNavigate={handleNavigate} onLogout={logout} />}
      {currentView === 'faq' && <FAQ onNavigate={handleNavigate} />}
      {currentView === 'glossary' && <Glossary onNavigate={handleNavigate} />}
      {currentView === 'overview' && <Overview onNavigate={handleNavigate} />}
      {currentView === 'prselection' && <PRSelection onNavigate={handleNavigate} />}
      {currentView === 'promptpreparation' && <PromptPreparation onNavigate={handleNavigate} />}
      {currentView === 'modelworkspace' && <ModelWorkspace onNavigate={handleNavigate} />}
      {currentView === 'rulesandrequirements' && <RulesAndRequirements onNavigate={handleNavigate} />}
       {currentView === 'cli' && <CLI onNavigate={handleNavigate} />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;