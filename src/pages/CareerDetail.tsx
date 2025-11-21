// src/pages/CareerDetail.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CareerDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const career = searchParams.get('career') || 'Unknown Career';

  return (
    <div className="career-detail">
      <h2>🎯 Your Chosen Career Path</h2>
      <h3>{career}</h3>
      <p>
        For personalized advice and effective data about <strong>{career}</strong> in 2025/2026, 
        contact me directly at 📞 <strong>+972534022344</strong>.
      </p>
    </div>
  );
};

export default CareerDetail;
