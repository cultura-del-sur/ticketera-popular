import EventDate from '@/components/EventDate';
import BuyTicketsButton from './BuyTicketsButton';
import EventLocation from '@/components/EventLocation';

import { Event } from '@/lib/data';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="event-card rounded-lg overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <EventDate date={event.date} />
        <EventLocation venue={event.venue} />
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">Tickets desde ${Math.min(...event.tickets.map(t => t.price))}</span>
          <BuyTicketsButton eventId={event.id} />
        </div>
      </div>
    </div>
  );
}