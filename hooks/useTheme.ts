import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    window.matchMedia &&
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) =>
          e.matches ? setTheme('dark') : setTheme('light'),
        );
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme];
};
