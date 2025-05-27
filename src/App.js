import React, { useState } from 'react';
import './index.css';

import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white pt-24 flex flex-col">
        <Header
          name="Rani James"
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
        <main className="max-w-5xl mx-auto p-4 flex-1 w-full">
          <About />
          <Skills />
          <Experience />
          <Education />
        </main>
        <footer className="w-full bg-white dark:bg-gray-800 border-t-2 border-pink-200 dark:border-yellow-400 shadow-inner mt-8">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <Contact
              github = "https://github.com/RaniJames17"
  githubLabel = "github.com/RaniJames17"
  address = "Toronto, ON, Canada"
  email = "ranijames@loyalistcollege.com"
  phone = "+1 (555) 123-4567"
  linkedin = "https://www.linkedin.com/in/rani-james-95901b142/"
  linkedinLabel = "linkedin.com/in/rani-james-95901b142"

              
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

// This is the main component of the application.
