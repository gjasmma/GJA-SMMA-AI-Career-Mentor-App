// src/components/Questionnaire.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Questionnaire: React.FC = () => {
  const [careerGoal, setCareerGoal] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCareerGoal(e.target.value);
  };

  return (
    <div className="questionnaire">
      <h2>Enter Your Career Goal</h2>
      <input
        type="text"
        value={careerGoal}
        onChange={handleChange}
        placeholder="What is your career goal?"
      />
      <Link to={`/career-result?goal=${careerGoal}`}>
        <button>See Career Suggestions</button>
      </Link>
      <Link to="/resume-builder">
        <button>Go to Resume Builder</button>
      </Link>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </div>
  );
};

export default Questionnaire;