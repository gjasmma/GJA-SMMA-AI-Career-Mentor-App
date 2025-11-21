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
            {/* Step 1: Questionnaire */}
            <Route path="/" element={<Questionnaire />} />

            {/* Step 2: Career goal selection */}
            <Route path="/career-selector" element={<CareerSelector />} />

            {/* Step 3: Career suggestions based on goal */}
            <Route path="/career-results" element={<CareerResults />} />

            {/* Step 4: Final detail page for chosen career */}
            <Route path="/career-detail" element={<CareerDetail />} />

            {/* Step 5: Resume builder */}
            <Route path="/resume-builder" element={<ResumeBuilder />} />

            {/* Step 6: Profile page */}
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

