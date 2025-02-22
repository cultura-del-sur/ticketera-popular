import { Venue } from '@/lib/data';
import { MapPin } from 'lucide-react';

interface EventLocationProps {
  venue: Venue;
}

export default function EventLocation({ venue }: EventLocationProps) {
  return (
    <div className="flex items-center text-zinc-400 mb-4">
      <MapPin size={20} className="mr-2" />
      {venue.name}
    </div>
  );
}