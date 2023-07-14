import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
            <Link href="/">
              <p className="text-2xl font-bold text-zinc-800">
                <span className="text-orange-700">Ґ</span>уральня
              </p>
            </Link>
          </div>
        </header>
        <main className="grow">
          <div className="h-full w-5/6 flex items-center px-4 mx-auto">
            {children}
          </div>
        </main>
        <footer className="w-screen h-32 flex justify-center items-center bg-sky-800">
          <p className="text-orange-100">&copy; copyright 2023</p>
        </footer>
      </body>
    </html>
  );
}
