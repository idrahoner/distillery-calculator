import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-blue-500">
      <h1 className="text-xl text-gray-900 mb-8">Ґуральний калькулятор</h1>
      <Link href="/selection-heads-and-tails">Відбір голів та хвостів</Link>
    </div>
  );
}
