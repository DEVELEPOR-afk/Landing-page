'use client';

import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return nothing until mounted to avoid hydration issues with browser extensions
  if (!mounted) {
    return null;
  }

  return <Component {...pageProps} />;
} 