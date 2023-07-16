import Link from 'next/link';

export default function ButtonLink({
  href,
  className = '',
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block px-2 py-1 text-lg border-2 border-solid border-sky-800 rounded-md shadow hover:text-orange-100 hover:bg-sky-800 hover:shadow-md  transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
