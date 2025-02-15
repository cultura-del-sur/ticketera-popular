interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {children}
    </section>
  );
}