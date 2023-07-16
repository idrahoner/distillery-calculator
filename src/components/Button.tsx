import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children: ReactNode;
}

export default function Button({
  primary = false,
  type = 'button',
  children,
  ...rest
}: IProps) {
  const baseStyle =
    'flex justify-center items-center grow px-2 py-1 border-2 border-solid border-sky-800 rounded-md enabled:hover:scale-95 enable:hover:shadow-md transition duration-300 disabled:bg-zinc-200 disabled:border-zinc-200 disabled:text-zinc-500';

  return (
    <button
      type={type}
      className={`${baseStyle}  ${
        primary
          ? 'bg-sky-800 text-orange-100'
          : 'hover:bg-sky-800 hover:text-orange-100'
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
