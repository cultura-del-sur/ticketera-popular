'use client'

import { useFeaturedEvents } from '@/tkt_events/hooks'
import EventCard from './EventCard'
import SectionTitle from './SectionTitle'

export default function FeaturedEvents() {
  const { events, isLoading, error } = useFeaturedEvents()

  return (
    <div id="eventos">
      <SectionTitle>Próximos Eventos</SectionTitle>
      {isLoading && (
        <p className="text-center text-gray-400">Cargando eventos...</p>
      )}
      {error && (
        <p className="text-center text-red-400">Error al cargar eventos</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
