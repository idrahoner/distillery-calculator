import Link from 'next/link';
import Container from './Container';

export default function Header() {
  return (
    <header className="w-screen h-16 mb-4 border-b border-solid border-gray-200 shadow">
      <Container className="flex items-center">
        <Link
          href="/"
          className="flex items-center gap-1 text-2xl font-bold text-zinc-800 hover:text-orange-700 transition-colors duration-300"
        >
          <svg className="w-8 h-8 fill-current stroke-current stroke-1">
            <use href="/distillery-calculator/images/icons.svg#icon-logo"></use>
          </svg>
          <p>
            <span className="text-orange-700">Ґ</span>уральня
          </p>
        </Link>
      </Container>
    </header>
  );
}
