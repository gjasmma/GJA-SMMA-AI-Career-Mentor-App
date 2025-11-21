// src/pages/CareerResults.tsx
import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const CareerResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const careerGoal = (searchParams.get('goal') || '').toLowerCase();

  const careerOptions = useMemo(() => {
    switch (careerGoal) {
      case 'developer':
        return ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Full-Stack AI Engineer'];
      case 'health':
        return ['Fitness Coach', 'Dietitian', 'Therapist', 'Medical Doctor'];
      case 'security':
        return ['Cybersecurity Analyst', 'Ethical Hacker (CEH)', 'IT Penetration Tester'];
      // … add other categories here …
      default:
        return ['Consulting', 'Project Management', 'Data Analyst'];
    }
  }, [careerGoal]);

  return (
    <div className="career-result">
      <h2>Career Suggestions for: {careerGoal}</h2>
      <ul>
        {careerOptions.map((option, index) => (
          <li key={index} className="career-option">
            <Link to={`/career-detail?career=${encodeURIComponent(option)}`}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerResults;

