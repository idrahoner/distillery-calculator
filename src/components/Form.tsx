'use client';
import { useState } from 'react';

export default function Form() {
  const [result, setResult] = useState('');
  return (
    <form
      name="calculator"
      className="flex flex-col gap-4 w-5/6"
      onSubmit={(event) => {
        event.preventDefault();
        const { number1, number2 } = event.target as typeof event.target & {
          number1: { value: string };
          number2: { value: string };
        };
        setResult(
          `The sum is equal to ${Number(number1.value) + Number(number2.value)}`
        );
        event.currentTarget.reset();
      }}
    >
      <input type="number" name="number1" placeholder="Введіть перше число" />
      <input type="number" name="number2" placeholder="Введіть друге число" />
      <button type="submit">Порахувати</button>
      <button type="button" onClick={() => setResult('')}>
        Стерти
      </button>
      <p>{result}</p>
    </form>
  );
}
