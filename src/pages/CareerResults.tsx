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
      case 'designer':
        return ['UI/UX Designer', 'Graphic Designer', 'Creative Technologist', 'Product Designer'];
      case 'security':
        return ['Cybersecurity Analyst', 'Ethical Hacker (CEH)', 'IT Penetration Tester', 'AI Threat Intelligence Specialist'];
      case 'health':
        return ['Fitness Coach', 'Dietitian', 'Therapist', 'Medical Doctor'];
      case 'relationships':
        return ['Relationship Advisor', 'Relationship Coach', 'Life Coach', 'Family Therapist'];
      case 'business':
        return ['Global Analyst', 'Social Media Marketing Expert', 'Digital Strategist', 'Entrepreneur'];
      case 'finance':
        return ['Cryptocurrency Investor', 'Stock Market Advisor', 'Financial Analyst'];
      case 'law':
        return ['Lawyer', 'Corporate Legal Advisor', 'AI Ethics & Policy Specialist'];
      case 'ai':
        return ['AI Agent', 'AI Ethics Specialist', 'AI Product Manager', 'AI Research Scientist'];
      default:
        return ['Consulting', 'Project Management', 'Data Analyst', 'Sustainability Consultant'];
    }
  }, [careerGoal]);

  return (
    <div className="career-result">
      <h2>Career Suggestions for: {careerGoal || '—'}</h2>
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


