// src/pages/ResumeBuilder.tsx
import React, { useState } from 'react';

const ResumeBuilder: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');

  const handleDownloadResume = () => {
    const resume = `
      Name: ${name}
      Email: ${email}
      Skills: ${skills}
    `;
    const blob = new Blob([resume], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}-resume.txt`;
    link.click();
  };

  return (
    <div className="resume-builder">
      <h2>Resume Builder</h2>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-group">
        <label>Skills:</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter your skills"
        />
      </div>
      <button onClick={handleDownloadResume}>Download Resume</button>
    </div>
  );
};

export default ResumeBuilder;