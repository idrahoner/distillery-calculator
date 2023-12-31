import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import ButtonLink from '../components/ButtonLink';
import Section from '../components/Section';

const navLinks = [
  { href: '/selection-heads-and-tails', title: 'Відбір голів та хвостів' },
  { href: '/mix-with-water', title: 'Розбалення спирту з водою' },
];

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <PageTitle>Ґуральний калькулятор</PageTitle>
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, title }) => (
                <li key={href} className="max-w-xs">
                  <ButtonLink href={href}>{title}</ButtonLink>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>
    </main>
  );
}
