import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareerResult from './pages/CareerResults';
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
            <Route path="/career-result" element={<CareerResult />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
  <div className="fade-in">
    {}
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
