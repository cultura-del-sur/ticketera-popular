'use client';

import { Venue } from '@/lib/data';
import EventDate from './EventDate';
import EventLocation from './EventLocation';

interface EventBriefProps {
  title: string;
  description: string;
  date: string;
  venue: Venue;
}

export default function EventBrief({ title, description, date, venue }: EventBriefProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="space-y-2 text-zinc-400">
        <p>{description}</p>
        <EventDate date={date} />
        <EventLocation venue={venue} />
      </div>
    </div>
  );
}