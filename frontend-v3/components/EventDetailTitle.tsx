'use client';

interface EventDetailTitleProps {
  title: string;
  description: string;
}

export default function EventDetailTitle({ title, description }: EventDetailTitleProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-zinc-400 mb-4">{description}</p>
    </div>
  );
}