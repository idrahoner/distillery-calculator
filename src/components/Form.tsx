import { FormHTMLAttributes, ReactNode } from 'react';

export default function Form({
  children,
  ...rest
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form {...rest} className="flex flex-col gap-4 max-w-xs">
      {children}
    </form>
  );
}
