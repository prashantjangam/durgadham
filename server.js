import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const MODE = process.env.RECAPTCHA_MODE || 'standard'; // 'standard' or 'enterprise'
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET; // For standard reCAPTCHA
const GCP_PROJECT_ID = process.env.GCP_PROJECT_ID; // For enterprise
const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY; // For enterprise

let enterpriseClient;
if (MODE === 'enterprise') {
  enterpriseClient = new RecaptchaEnterpriseServiceClient();
}

const allowedOrigins = [
  'http://localhost:9002',          // Local Vite dev
  'https://localhost:9002',         // If using HTTPS locally
  'https://diamondsportsclub.org',         // Main production domain
  'https://www.diamondsportsclub.org',  
  'https://diamondsportsclub.netlify.app',  // With www
  'https://*.netlify.app' // Netlify preview deployment
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    // ✅ Allow main domain, localhost, and any Netlify preview
    if (
      allowedOrigins.includes(origin) ||
      /^https:\/\/.*\.netlify\.app$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked for origin: ${origin}`));
    }
  },
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// ✅ Remove reCAPTCHA camera/mic warning by setting Permissions-Policy header
app.use((req, res, next) => {
  res.setHeader("Permissions-Policy", "camera=(), microphone=()");
  next();
});

app.use(express.json());

app.post('/verify-captcha', async (req, res) => {
  const { token, action } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: 'Token missing' });
  }

  try {
    if (MODE === 'standard') {
      // ✅ Standard reCAPTCHA verification
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
      });

      const data = await response.json();
      console.log('Standard reCAPTCHA response:', data);

      if (data.success && (data.score ?? 1) >= 0.5) {
        return res.json({ success: true, score: data.score, mode: 'standard' });
      } else {
        return res.status(403).json({ success: false, score: data.score, mode: 'standard' });
      }
    } else if (MODE === 'enterprise') {
      // ✅ Enterprise reCAPTCHA verification
      const [assessment] = await enterpriseClient.createAssessment({
        parent: enterpriseClient.projectPath(GCP_PROJECT_ID),
        assessment: {
          event: {
            token,
            siteKey: RECAPTCHA_SITE_KEY,
          },
        },
      });

      console.log('Enterprise reCAPTCHA response:', assessment);

      if (!assessment.tokenProperties.valid) {
        return res.status(403).json({
          success: false,
          reason: assessment.tokenProperties.invalidReason,
          mode: 'enterprise',
        });
      }

      if (assessment.tokenProperties.action !== action) {
        return res.status(403).json({
          success: false,
          message: 'Action mismatch',
          mode: 'enterprise',
        });
      }

      const score = assessment.riskAnalysis.score;
      return res.json({ success: score >= 0.5, score, mode: 'enterprise' });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid mode' });
    }
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} in ${MODE} mode`));