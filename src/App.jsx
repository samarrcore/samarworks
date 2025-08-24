
import React, { useState } from 'react';
import './App.css';
import styles from './TerminalTheme.module.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingCommand, setPendingCommand] = useState(null);

  const navigateToPage = (page, withAutoType = false) => {
    if (withAutoType && page !== 'home') {
      // First go to home with the pending command
      setPendingCommand(page);
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPage('home');
      }, 1500);
    } else {
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPage(page);
        setPendingCommand(null);
      }, 1500);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateToPage} pendingCommand={pendingCommand} />;
      case 'about':
        return <About onNavigate={(page) => navigateToPage(page, true)} />;
      case 'skills':
        return <Skills onNavigate={(page) => navigateToPage(page, true)} />;
      case 'portfolio':
        return <Portfolio onNavigate={(page) => navigateToPage(page, true)} />;
      case 'services':
        return <Services onNavigate={(page) => navigateToPage(page, true)} />;
      case 'contact':
        return <Contact onNavigate={(page) => navigateToPage(page, true)} />;
      default:
        return <Home onNavigate={navigateToPage} pendingCommand={pendingCommand} />;
    }
  };

  return (
    <div className={styles.terminal}>
      {isLoading && <LoadingScreen />}
      {renderCurrentPage()}
      
      {/* Terminal Access Button */}
      <button
        onClick={() => navigateToPage('home')}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#222',
          border: '1px solid #00ff00',
          color: '#00ff00',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '0.875rem',
          zIndex: 9998
        }}
      >
        Terminal
      </button>
    </div>
  );
}

export default App;
