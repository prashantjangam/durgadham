import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './page';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <GoogleReCaptchaProvider
          reCaptchaKey="6LdOATssAAAAAHSThqXSBPylj_ndQroElZKmBMty" // Replace with your site key
          scriptProps={{ async: true, defer: true }}
        >
          <App />
        </GoogleReCaptchaProvider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);