'use client';

import Hero from '@/components/sections/Hero';
import Register from '@/components/sections/Register';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Register />
    </main>
  );
}
