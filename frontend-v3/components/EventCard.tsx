import EventDate from '@/components/EventDate'
import BuyTicketsButton from './BuyTicketsButton'
import EventLocation from '@/components/EventLocation'

import { I_Event } from '@/tkt_events/types'

interface EventCardProps {
  event: I_Event
}

export default function EventCard({ event }: EventCardProps) {
  const minPrice = Math.min(...event.tickets.map((t) => parseFloat(t.price)))

  return (
    <div className="event-card rounded-lg overflow-hidden">
      {event.featured_image && (
        <img
          src={event.featured_image}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
        <EventDate date={event.datetime} />
        <EventLocation venue={event.venue} />
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            Tickets desde ${isFinite(minPrice) ? minPrice.toLocaleString() : '—'}
          </span>
          <BuyTicketsButton eventId={String(event.id)} />
        </div>
      </div>
    </div>
  )
}
