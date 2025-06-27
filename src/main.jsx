// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AppProvider } from './context/AppContext';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AppProvider>
//     <Router>
//     <App />
//     </Router>
//     </AppProvider>
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* Wrap the app with HelmetProvider */}
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </HelmetProvider>
  </StrictMode>,
);