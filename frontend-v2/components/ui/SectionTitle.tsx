interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="mb-12 text-3xl font-bold">{children}</h2>;
}