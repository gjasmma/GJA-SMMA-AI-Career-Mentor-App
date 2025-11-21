// src/pages/CareerResults.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CareerResults: React.FC = () => {
  const [careerOptions, setCareerOptions] = useState<string[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const careerGoal = query.get('goal') || 'unknown career goal';

  useEffect(() => {
    const goal = careerGoal.toLowerCase();

    switch (goal) {
      case 'developer':
        setCareerOptions([
          'Frontend Developer',
          'Backend Developer',
          'Full Stack Developer',
          'Full-Stack AI Engineer',
          'Blockchain Developer',
          'Quantum Computing Researcher'
        ]);
        break;
      case 'designer':
        setCareerOptions([
          'UI/UX Designer',
          'Graphic Designer',
          'Creative Technologist',
          'Product Designer'
        ]);
        break;
      case 'security':
        setCareerOptions([
          'Cybersecurity Analyst',
          'Ethical Hacker (CEH)',
          'IT Penetration Tester',
          'Apple Security Software Developer',
          'AI Threat Intelligence Specialist'
        ]);
        break;
      case 'health':
        setCareerOptions([
          'Fitness Coach',
          'Dietitian',
          'Therapist',
          'Medical Doctor',
          'Mental Health Counselor'
        ]);
        break;
      case 'relationships':
        setCareerOptions([
          'Relationship Advisor',
          'Relationship Coach',
          'Life Coach',
          'Family Therapist'
        ]);
        break;
      case 'business':
        setCareerOptions([
          'Global Analyst',
          'Social Media Marketing Expert',
          'Digital Strategist',
          'Entrepreneur',
          'Project Manager'
        ]);
        break;
      case 'finance':
        setCareerOptions([
          'Cryptocurrency Investor',
          'Stock Market Advisor',
          'Financial Analyst',
          'FinTech Product Manager'
        ]);
        break;
      case 'law':
        setCareerOptions([
          'Lawyer',
          'Corporate Legal Advisor',
          'AI Ethics & Policy Specialist'
        ]);
        break;
      case 'ai':
        setCareerOptions([
          'AI Agent',
          'AI Ethics Specialist',
          'AI Product Manager',
          'AI Research Scientist'
        ]);
        break;
      default:
        setCareerOptions([
          'Consulting',
          'Project Management',
          'Data Analyst',
          'Sustainability Consultant',
          'Climate Tech Engineer'
        ]);
        break;
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
