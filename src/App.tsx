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
        <h2>Please after choosing The right career contact US</h2>
        <h2>+972534022344</h2>
        <h2>For personal , Beneficial and Right Advice!</h2>
        
  <div className="fade-in">
    {}
  </div>

      </div>
    </Router>
  );
};

export default App;
