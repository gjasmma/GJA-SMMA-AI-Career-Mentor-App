// src/pages/CareerResults.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CareerResults: React.FC = () => {
  const [careerOptions, setCareerOptions] = useState<string[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const careerGoal = query.get('goal') || 'unknown career goal';

  useEffect(() => {
    const goal = careerGoal.toLowerCase();

    if (goal === 'developer') {
      setCareerOptions([
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'Full-Stack AI Engineer',
        'Blockchain Developer',
        'Quantum Computing Researcher'
      ]);
    } else if (goal === 'designer') {
      setCareerOptions([
        'UI/UX Designer',
        'Graphic Designer',
        'Creative Technologist',
        'Product Designer'
      ]);
    } else if (goal === 'security') {
      setCareerOptions([
        'Cybersecurity Analyst',
        'Ethical Hacker (CEH)',
        'IT Penetration Tester',
        'Apple Security Software Developer',
        'AI Threat Intelligence Specialist'
      ]);
    } else if (goal === 'health') {
      setCareerOptions([
        'Fitness Coach',
        'Dietitian',
        'Therapist',
        'Medical Doctor',
        'Mental Health Counselor'
      ]);
    } else if (goal === 'relationships') {
      setCareerOptions([
        'Relationship Advisor',
        'Relationship Coach',
        'Life Coach',
        'Family Therapist'
      ]);
    } else if (goal === 'business') {
      setCareerOptions([
        'Global Analyst',
        'Social Media Marketing Expert',
        'Digital Strategist',
        'Entrepreneur',
        'Project Manager'
      ]);
    } else if (goal === 'finance') {
      setCareerOptions([
        'Cryptocurrency Investor',
        'Stock Market Advisor',
        'Financial Analyst',
        'FinTech Product Manager'
      ]);
    } else if (goal === 'law') {
      setCareerOptions([
        'Lawyer',
        'Corporate Legal Advisor',
        'AI Ethics & Policy Specialist'
      ]);
    } else {
      // Default / general suggestions
      setCareerOptions([
        'Consulting',
        'Project Management',
        'Data Analyst',
        'AI Agent',
        'Sustainability Consultant',
        'Climate Tech Engineer'
      ]);
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
