import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Assuming App is your root component

import './index.scss';
import 'macro-css';


// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById('root'));

// Render your app using createRoot
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
