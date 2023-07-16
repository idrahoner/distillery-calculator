'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Form from './Form';
import FormField from './FormField';
import Button from './Button';

const FORM_INITIAL_STATE = {
  volume: '',
  strengthBefore: '',
  strengthAfter: '',
};

export default function FromMixWithWater() {
  const [result, setResult] = useState('');
  const [formState, setFormState] = useState(FORM_INITIAL_STATE);

  const handleInputCahnge = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const calculate = (volume: number, before: number, after: number) => {
    const volumeMl = volume * 1000;

    const waterML = (before / after) * volumeMl - volumeMl;

    return waterML / 1000;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { volume, strengthBefore, strengthAfter } = formState;
    const calculatedResult = calculate(
      Number(volume),
      Number(strengthBefore),
      Number(strengthAfter)
    );

    setResult(
      `Для розбавлення ${volume}л спирту міцністю ${strengthBefore}˚ до ${strengthAfter}˚, потрібно ${calculatedResult}л води. Гарного відпочинку :)`
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
        name="volume"
        step={0.1}
        placeholder="Об‘єм сирцю в літрах"
        value={formState.volume}
        onChange={handleInputCahnge}
      />
      <FormField
        label="Початкова міцність (%):"
        type="number"
        name="strengthBefore"
        min={0}
        max={100}
        step={0.1}
        placeholder="Міцність в відсотках"
        value={formState.strengthBefore}
        onChange={handleInputCahnge}
      />
      <FormField
        label="Бажана міцність (%):"
        type="number"
        name="strengthAfter"
        min={0}
        max={100}
        step={0.1}
        placeholder="Міцність в відсотках"
        value={formState.strengthAfter}
        onChange={handleInputCahnge}
      />
      <div className="flex flex-wrap gap-2">
        <Button
          primary
          type="submit"
          disabled={
            !formState.volume ||
            !formState.strengthBefore ||
            !formState.strengthAfter
          }
        >
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
