// src/pages/CareerDetail.tsx
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const CareerDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const career = searchParams.get('career') || 'Unknown Career';

  // Map each career to details
  const careerInfo = useMemo(() => {
    const details: Record<
      string,
      { skills: string[]; resources: string[]; outlook: string }
    > = {
      "Frontend Developer": {
        skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX principles"],
        resources: ["freeCodeCamp", "Frontend Masters", "MDN Web Docs"],
        outlook: "High demand in 2025 with focus on performance and accessibility."
      },
      "Backend Developer": {
        skills: ["Node.js", "Python", "Databases", "APIs", "Cloud services"],
        resources: ["Udemy Backend Courses", "AWS Training", "PostgreSQL Docs"],
        outlook: "Strong growth as businesses scale cloud-native apps."
      },
      "Full-Stack AI Engineer": {
        skills: ["React", "Python", "TensorFlow/PyTorch", "APIs", "MLOps"],
        resources: ["DeepLearning.AI", "Fast.ai", "Vite + React Docs"],
        outlook: "One of the hottest careers in 2025, merging AI with full-stack dev."
      },
      "Cybersecurity Analyst": {
        skills: ["Network Security", "Threat Analysis", "SIEM tools", "Incident Response"],
        resources: ["Cybrary", "CompTIA Security+", "MITRE ATT&CK Framework"],
        outlook: "Critical demand as cyber threats evolve globally."
      },
      "Ethical Hacker (CEH)": {
        skills: ["Penetration Testing", "Exploit Development", "Metasploit", "Burp Suite"],
        resources: ["EC-Council CEH", "HackTheBox", "OWASP"],
        outlook: "High demand for proactive defense in enterprises."
      },
      "Fitness Coach": {
        skills: ["Exercise Science", "Nutrition Basics", "Client Motivation", "Program Design"],
        resources: ["NASM Certification", "ACE Fitness", "Precision Nutrition"],
        outlook: "Growing demand with focus on holistic health and online coaching."
      },
      "Lawyer": {
        skills: ["Legal Research", "Contract Law", "Negotiation", "Critical Thinking"],
        resources: ["Harvard Law Online", "Bar Association Resources"],
        outlook: "Stable demand, with new opportunities in AI ethics and tech law."
      },
      "AI Agent": {
        skills: ["Prompt Engineering", "LLM APIs", "Automation Workflows", "Ethics in AI"],
        resources: ["OpenAI Learning Hub", "Microsoft Learn AI", "LangChain Docs"],
        outlook: "Explosive growth as AI agents become mainstream in business."
      },
      "Cryptocurrency Investor": {
        skills: ["Blockchain Basics", "Market Analysis", "Risk Management", "Portfolio Strategy"],
        resources: ["CoinDesk", "Binance Academy", "Investopedia Crypto"],
        outlook: "Volatile but lucrative; regulation shaping the future in 2025."
      },
      "Stock Market Advisor": {
        skills: ["Financial Analysis", "Equity Research", "Risk Assessment", "Client Advisory"],
        resources: ["Bloomberg Market Concepts", "CFA Institute", "Yahoo Finance"],
        outlook: "Steady demand with AI-driven analytics reshaping the field."
      }
    };

    return details[career] || {
      skills: ["General Problem-Solving", "Communication", "Adaptability"],
      resources: ["LinkedIn Learning", "Coursera", "edX"],
      outlook: "A versatile career path with opportunities across industries."
    };
  }, [career]);

  return (
    <div className="career-detail">
      <h2>🎯 Your Chosen Career Path</h2>
      <h3>{career}</h3>
      <p>
        Congratulations! You’ve selected <strong>{career}</strong>. Here’s what you need to know:
      </p>

      <h4>🛠️ Key Skills</h4>
      <ul>
        {careerInfo.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>

      <h4>📚 Learning Resources</h4>
      <ul>
        {careerInfo.resources.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>

      <h4>📈 Career Outlook</h4>
      <p>{careerInfo.outlook}</p>
    </div>
  );
};

export default CareerDetail;
