import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
        <header className="w-screen h-16 mb-4 border-b border-solid border-sky-800">
          <div className="h-full w-5/6 flex items-center px-4 mx-auto">
            <Link
              href="/"
              className="flex items-center gap-1 text-2xl font-bold text-zinc-800 hover:text-orange-700 transition-colors duration-300"
            >
              <svg className="w-8 h-8 fill-current stroke-current stroke-1">
                <use href="/images/icons.svg#icon-logo"></use>
              </svg>
              <p>
                <span className="text-orange-700">Ґ</span>уральня
              </p>
            </Link>
          </div>
        </header>
        <main className="grow">
          <div className="w-5/6 px-4 mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
