// import { createContext, useState } from 'react';

// export const AppContext = createContext();

// export const AppProvider = (props) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };
// export default AppContext;

import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  // Initialize theme from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;