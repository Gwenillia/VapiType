import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslation from './locales/en/en.json';
import frenchTranslation from './locales/fr/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: englishTranslation
    },
    fr: {
      translation: frenchTranslation
    }
  },
  lng: 'en',
  fallbackLng: 'en',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
