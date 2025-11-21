// src/pages/CareerSelector.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareerSelector: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGoal) {
      navigate(`/career-results?goal=${selectedGoal}`);
    }
  };

  return (
    <div className="career-selector">
      <h2>Choose Your Career Path</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
          required
        >
          <option value="">-- Select a career goal --</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="security">Security</option>
          <option value="health">Health</option>
          <option value="relationships">Relationships</option>
          <option value="business">Business</option>
          <option value="finance">Finance</option>
          <option value="law">Law</option>
          <option value="ai">AI Agent</option>
        </select>
        <button type="submit">See Career Suggestions</button>
      </form>
    </div>
  );
};

export default CareerSelector;
