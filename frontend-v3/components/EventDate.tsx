'use client';

import { Calendar } from 'lucide-react';

interface EventDateProps {
  date: string;
}

export default function EventDate({ date }: EventDateProps) {
  return (
    <div className="flex items-center text-zinc-400 mb-2">
      <Calendar size={20} className="mr-2" />
      {new Date(date).toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </div>
  );
}