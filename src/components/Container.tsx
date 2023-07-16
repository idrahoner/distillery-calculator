export default function Container({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`w-5/6 h-full px-4 mx-auto ${className}`}>{children}</div>
  );
}
