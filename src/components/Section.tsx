export default function Section({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={`w-full py-4 ${className}`}>{children}</section>;
}
