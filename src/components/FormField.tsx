import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormField({ label, ...rest }: IProps) {
  return (
    <label className="flex flex-col gap">
      {label}
      <input
        {...rest}
        className="px-2 py-1 border-2 border-solid border-sky-800 rounded-md focus:outline-none focus:shadow-md focus:border-sky-500 invalid:border-red-500"
      />
    </label>
  );
}
