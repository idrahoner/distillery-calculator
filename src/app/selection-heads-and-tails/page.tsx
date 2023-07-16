import Form from '@/src/components/Form';
import Container from '@/src/components/Container';
import PageTitle from '@/src/components/PageTitle';
import GoHomeButton from '@/src/components/GoHomeButton';

export default function SelectionHeadsAndTails() {
  return (
    <main>
      <Container>
        <PageTitle>Відбір голів та хвостів</PageTitle>
        <Form />
        <GoHomeButton />
      </Container>
    </main>
  );
}
