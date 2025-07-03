import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MoneyFox Trading Community – Level Up Your Trading',
  description: 'Join MoneyFox, the elite trading mentorship community. Get expert guidance, exclusive resources, and connect with top traders worldwide.',
  openGraph: {
    description: 'Join MoneyFox, the elite trading mentorship community. Get expert guidance, exclusive resources, and connect with top traders worldwide.',
    image: '/images/og-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoneyFox Trading Community – Level Up Your Trading',
    description: 'Join MoneyFox, the elite trading mentorship community. Get expert guidance, exclusive resources, and connect with top traders worldwide.',
    image: '/images/og-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-900 text-white'}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
