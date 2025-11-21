// src/pages/Profile.tsx
import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [careerGoal, setCareerGoal] = useState('Software Developer');

  const handleProfileUpdate = () => {
    // Profile update logic (e.g., API call)
    alert('Profile Updated!');
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Career Goal:</label>
        <input
          type="text"
          value={careerGoal}
          onChange={(e) => setCareerGoal(e.target.value)}
        />
      </div>
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
};

export default Profile;