// src/pages/CareerResults.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CareerResults: React.FC = () => {
  const [careerOptions, setCareerOptions] = useState<string[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const careerGoal = query.get('goal') || 'unknown career goal';

  useEffect(() => {
    // Mock data based on the career goal
    if (careerGoal.toLowerCase() === 'developer') {
      setCareerOptions(['Frontend Developer', 'Backend Developer', 'Full Stack Developer']);
    } else if (careerGoal.toLowerCase() === 'designer') {
      setCareerOptions(['UI/UX Designer', 'Graphic Designer']);
    } else {
      setCareerOptions(['Consulting', 'Project Management', 'Data Analyst']);
    }
  }, [careerGoal]);

  return (
    <div className="career-result">
      <h2>Career Suggestions for: {careerGoal}</h2>
      <ul>
        {careerOptions.map((option, index) => (
          <li key={index} className="career-option">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerResults;