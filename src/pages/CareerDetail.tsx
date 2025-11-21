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
        Congratulations! You’ve selected <strong>{career}</strong>. 
        This page can provide more detailed insights — such as skills required, 
        learning resources, and potential career growth in 2025.
      </p>
    </div>
  );
};

export default CareerDetail;
