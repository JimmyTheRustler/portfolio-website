'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check for saved theme preference, default to light mode
    // IGNORE OS preferences - only use manual user selection
    try {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme === 'dark') {
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    } catch {
      console.log('Could not access localStorage, defaulting to light mode');
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Update document class and save to localStorage
    try {
      console.log('Applying theme:', theme);
      console.log('Current HTML classes:', document.documentElement.className);
      
      // Force remove any existing dark classes first
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        console.log('Added dark class. New HTML classes:', document.documentElement.className);
        console.log('Body classes:', document.body.className);
      } else {
        // Ensure light mode - no dark classes present
        console.log('Ensuring light mode - no dark classes present');
        console.log('HTML classes after cleanup:', document.documentElement.className);
        console.log('Body classes after cleanup:', document.body.className);
      }
      
      localStorage.setItem('theme', theme);
    } catch {
      console.log('Could not update theme in localStorage');
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log('toggleTheme function called!');
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', prevTheme, 'to', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  console.log('Theme context:', context);
  return context;
} 