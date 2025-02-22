import { Calendar, MapPin } from 'lucide-react';
import { events } from '@/lib/data';
import BuyTicketsButton from './BuyTicketsButton';

export default function FeaturedEvents() {
  return (
    <div id="eventos">
      <h2 className="text-3xl font-bold mb-8">Próximos Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="event-card rounded-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="flex items-center text-zinc-400 mb-2">
                <Calendar size={16} className="mr-2" />
                {new Date(event.date).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                })}
              </div>
              <div className="flex items-center text-zinc-400 mb-4">
                <MapPin size={16} className="mr-2" />
                {event.venue}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${event.price}</span>
                <BuyTicketsButton eventId={event.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}