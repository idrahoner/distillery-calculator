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
        const { spirit, strength } = event.target as typeof event.target & {
          spirit: { value: string };
          strength: { value: string };
        };

        const essentialSpirit =
          (Number(strength.value) / 100) * Number(spirit.value);

        const heads = essentialSpirit * 0.11;
        const tails = essentialSpirit * 0.17;
        const body = essentialSpirit - heads - tails;

        setResult(
          `При перегоні буде отримано ${heads.toFixed(
            2
          )}л голів, ${body.toFixed(2)}л тіла та ${tails.toFixed(
            2
          )}л хвостів. Вдалого перегону :)`
        );
        event.currentTarget.reset();
      }}
    >
      <input type="number" name="spirit" placeholder="Введіть перше число" />
      <input type="number" name="strength" placeholder="Введіть друге число" />
      <button type="submit">Порахувати</button>
      <button type="button" onClick={() => setResult('')}>
        Стерти
      </button>
      <textarea
        readOnly
        style={{ resize: 'none' }}
        rows={5}
        cols={30}
        value={result}
      />
    </form>
  );
}
