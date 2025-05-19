import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TradingMentor - Expert Trading Mentorship',
  description:
    'Join our expert trading mentorship program and learn proven strategies to succeed in the financial markets.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
