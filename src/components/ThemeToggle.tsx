import React from 'react';

const ThemeToggle: React.FC = () => {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
      'data-theme',
      current === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <button onClick={toggleTheme}>
      Toggle {document.documentElement.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;