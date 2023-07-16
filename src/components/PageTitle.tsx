export default function PageTitle({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={`text-2xl text-gray-900 mb-8 ${className}`}>{children}</h1>
  );
}
