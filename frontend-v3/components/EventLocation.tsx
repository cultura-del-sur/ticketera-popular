import { MapPin } from 'lucide-react';

interface EventLocationProps {
  venue: string;
}

export default function EventLocation({ venue }: EventLocationProps) {
  return (
    <div className="flex items-center text-zinc-400 mb-4">
      <MapPin size={20} className="mr-2" />
      {venue}
    </div>
  );
}