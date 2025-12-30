import fetch from 'node-fetch';

const allowedOrigins = [
  'http://localhost:9002',          // Local Vite dev
  'https://localhost:9002',         // If using HTTPS locally
  'https://diamonssportsclub.org',            // Main production domain
  'https://www.diamonssportsclub.org',  
  'https://diamonssportsclub.netlify.app'     // Main Netlify deployment
];

// Function to validate origin and return appropriate header
function getCorsHeaders(origin) {
  const isAllowed =
    allowedOrigins.includes(origin) ||
    /^https:\/\/.*\.netlify\.app$/.test(origin); // Allow Netlify previews

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : 'https://diamonssportsclub.org',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

export async function handler(event) {
  const origin = event.headers.origin || '';
  const corsHeaders = getCorsHeaders(origin);

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { token } = JSON.parse(event.body);
    const secret = process.env.RECAPTCHA_SECRET;

    const googleResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await googleResponse.json();

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error verifying captcha:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ success: false, message: 'Verification failed' }),
    };
  }
}