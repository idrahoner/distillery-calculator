import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ґуральний калькулятор',
  description: 'Калькулятор для потреб гуральні',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
