import Container from '@/src/components/Container';
import PageTitle from '@/src/components/PageTitle';
import GoHomeButton from '@/src/components/GoHomeButton';
import Section from '@/src/components/Section';

export default function MixWithWater() {
  return (
    <main>
      <Section>
        <Container>
          <PageTitle>Розбалення спирту з водою</PageTitle>
        </Container>
      </Section>
      <Section>
        <Container>
          <GoHomeButton />
        </Container>
      </Section>
    </main>
  );
}
