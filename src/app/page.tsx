import Link from 'next/link';
import Container from '../components/Container';

const navLinks = [
  { href: '/selection-heads-and-tails', title: 'Відбір голів та хвостів' },
  { href: '/mix-with-water', title: 'Розбалення спирту з водою' },
];

export default function Home() {
  return (
    <main>
      <section>
        <Container>
          <h1 className="text-2xl text-gray-900 mb-8">Ґуральний калькулятор</h1>
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, title }) => (
                <li
                  key={href}
                  className="px-2 py-1 max-w-xs border-2 border-solid border-sky-800 rounded-md shadow hover:text-orange-100 hover:bg-sky-800 hover:shadow-md  transition-colors duration-300"
                >
                  <Link href={href} className="text-lg">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>
    </main>
  );
}
