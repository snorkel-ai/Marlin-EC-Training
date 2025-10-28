import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Guidelines from './components/Guidelines';
import Videos from './components/Videos';
import Workbook from './components/Workbook';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app">
      {currentView === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentView === 'guidelines' && <Guidelines onNavigate={handleNavigate} />}
      {currentView === 'videos' && <Videos onNavigate={handleNavigate} />}
      {currentView === 'workbook' && <Workbook onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
