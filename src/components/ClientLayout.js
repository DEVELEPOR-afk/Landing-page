"use client";

import { useEffect, useState } from "react";

export default function ClientLayout({ children, geistSans, geistMono }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body
      className={`${geistSans} ${geistMono} antialiased`}
      suppressHydrationWarning
    >
      {children}
    </body>
  );
} 