import { events } from '@/lib/data';
import EventCard from './EventCard';
import SectionTitle from './SectionTitle';

export default function FeaturedEvents() {
  return (
    <div id="eventos">
      <SectionTitle>Próximos Eventos</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}