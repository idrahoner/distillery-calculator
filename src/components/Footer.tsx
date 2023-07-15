'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <footer className="w-screen h-32 flex flex-wrap justify-center items-center gap-8 py-8 bg-sky-800">
      {pathname !== '/' && (
        <Link
          href="/"
          className="text-orange-100 border-2 border-solid border-orange-100 rounded-lg px-4 py-2"
        >
          {'<-'} На гловну
        </Link>
      )}
      <p className="text-orange-100">&copy; copyright 2023</p>
    </footer>
  );
}
