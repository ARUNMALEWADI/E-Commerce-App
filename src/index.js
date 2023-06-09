import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { AuthContextProvider } from './components/Authentication/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
<AuthContextProvider>
<App />
</AuthContextProvider>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

