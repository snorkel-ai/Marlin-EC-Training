import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import FAQ from './components/FAQ';
import Glossary from './components/Glossary';
import Overview from './components/Overview';
import PRSelection from './components/PRSelection';
import PromptPreparation from './components/PromptPreparation';
import ModelWorkspace from './components/ModelWorkspace';
import RulesAndRequirements from './components/RulesAndRequirements';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app">
      {currentView === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentView === 'faq' && <FAQ onNavigate={handleNavigate} />}
      {currentView === 'glossary' && <Glossary onNavigate={handleNavigate} />}
      {currentView === 'overview' && <Overview onNavigate={handleNavigate} />}
      {currentView === 'prselection' && <PRSelection onNavigate={handleNavigate} />}
      {currentView === 'promptpreparation' && <PromptPreparation onNavigate={handleNavigate} />}
      {currentView === 'modelworkspace' && <ModelWorkspace onNavigate={handleNavigate} />}
      {currentView === 'rulesandrequirements' && <RulesAndRequirements onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;