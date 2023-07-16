import Link from 'next/link';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';

const navLinks = [
  { href: '/selection-heads-and-tails', title: 'Відбір голів та хвостів' },
  { href: '/mix-with-water', title: 'Розбалення спирту з водою' },
];

export default function Home() {
  return (
    <main>
      <section>
        <Container>
          <PageTitle>Ґуральний калькулятор</PageTitle>
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, title }) => (
                <li key={href} className="max-w-xs">
                  <Link
                    href={href}
                    className="block px-2 py-1 text-lg border-2 border-solid border-sky-800 rounded-md shadow hover:text-orange-100 hover:bg-sky-800 hover:shadow-md  transition-colors duration-300"
                  >
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
