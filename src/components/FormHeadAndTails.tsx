'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import Form from './Form';

const FORM_INITIAL_STATE = { spirit: '', strength: '' };

export default function FormHeadAndTails() {
  const [result, setResult] = useState('');
  const [formState, setFormState] = useState(FORM_INITIAL_STATE);

  const handleInputCahnge = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const essentialSpirit =
      (Number(formState.strength) / 100) * Number(formState.spirit);

    const heads = essentialSpirit * 0.11;
    const tails = essentialSpirit * 0.17;
    const body = essentialSpirit - heads - tails;

    setResult(
      `При перегоні буде отримано ${heads.toFixed(2)}л голів, ${body.toFixed(
        2
      )}л тіла та ${tails.toFixed(2)}л хвостів. Вдалого перегону :)`
    );
  };

  const handleCancel = () => {
    setResult('');
    setFormState(FORM_INITIAL_STATE);
  };

  return (
    <Form name="calculator" onSubmit={handleSubmit}>
      <FormField
        label="Сирець (л):"
        type="number"
        name="spirit"
        step={0.1}
        placeholder="Об‘єм сирцю в літрах"
        value={formState.spirit}
        onChange={handleInputCahnge}
      />
      <FormField
        label="Міцність (%):"
        type="number"
        name="strength"
        min={0}
        max={100}
        step={0.1}
        placeholder="Міцність в відсотках"
        value={formState.strength}
        onChange={handleInputCahnge}
      />
      <div className="flex flex-wrap gap-2">
        <Button primary type="submit">
          Порахувати
        </Button>
        <Button onClick={handleCancel}>Стерти</Button>
      </div>
      <textarea
        readOnly
        className="resize-none px-2 py-1 border-2 border-solid border-sky-800 rounded-md focus:outline-none focus:shadow-md focus:border-sky-500 invalid:border-red-500"
        rows={5}
        cols={30}
        value={result}
      />
    </Form>
  );
}
