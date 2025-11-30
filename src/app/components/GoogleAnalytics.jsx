'use client';

import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-9X7WWMHY0Y'; // ✅ Replace with your actual GA4 ID

export default function GoogleAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, []);

  return null;
}
