import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Guidelines from './components/Guidelines';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app">
      {currentView === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentView === 'guidelines' && <Guidelines onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
