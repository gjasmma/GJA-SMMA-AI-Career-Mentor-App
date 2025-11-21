// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareerResults from './pages/CareerResults';
import CareerSelector from './pages/CareerSelector';
import CareerDetail from './pages/CareerDetail';
import ResumeBuilder from './pages/ResumeBuilder';
import Profile from './pages/Profile';
import Questionnaire from './components/Questionnaire';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light'); // default theme
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="container">
          <ThemeToggle />
          <h1>AI Career Mentor</h1>
          <h2>Let’s explore your career path!</h2>

          <Routes>
            <Route path="/" element={<Questionnaire />} />
            <Route path="/career-selector" element={<CareerSelector />} />
            <Route path="/career-results" element={<CareerResults />} />
            <Route path="/career-detail" element={<CareerDetail />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <div className="fade-in">
          {/* Optional animations or transitions */}
        </div>
      </div>
    </Router>
  );
};

export default App;


