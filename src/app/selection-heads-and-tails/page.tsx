import FormHeadAndTails from '@/src/components/FormHeadAndTails';
import Container from '@/src/components/Container';
import PageTitle from '@/src/components/PageTitle';
import GoHomeButton from '@/src/components/GoHomeButton';
import Section from '@/src/components/Section';

export default function SelectionHeadsAndTails() {
  return (
    <main>
      <Section>
        <Container>
          <PageTitle>Відбір голів та хвостів</PageTitle>
          <FormHeadAndTails />
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
