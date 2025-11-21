// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareerResults from './pages/CareerResults';
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
          <h1 className="app-title">AI Career Mentor</h1>
          <h2 className="app-subtitle">Let’s explore your career path!</h2>

          <Routes>
            {/* Step 1: Questionnaire */}
            <Route path="/" element={<Questionnaire />} />

            {/* Step 2: Career suggestions */}
            <Route path="/career-results" element={<CareerResults />} />

            {/* Step 3: Resume builder */}
            <Route path="/resume-builder" element={<ResumeBuilder />} />

            {/* Step 4: Profile page */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Contact section */}
        <div className="contact-section fade-in">
          <h2>Please contact us after choosing the right career</h2>
          <p className="contact-phone">📞 +972534022344</p>
          <p className="contact-note">
            For personal, beneficial, and right advice tailored to your career in 2025/2026.
          </p>
        </div>
      </div>
    </Router>
  );
};

export default App;
