'use client';

import { events } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import EventDetailImage from '@/components/EventDetailImage';
import EventDetailTitle from '@/components/EventDetailTitle';
import EventDate from '@/components/EventDate';
import EventLocation from '@/components/EventLocation';
import EventAvailableTickets from '@/components/EventAvailableTickets';
import EventVenueLocation from '@/components/EventVenueLocation';
import { z } from 'zod';

const ticketFormSchema = z.object({
  quantity: z.number().min(1).max(10),
  name: z.string().min(3),
  email: z.string().email(),
})

type TicketForm = z.infer<typeof ticketFormSchema>


export default function EventPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);



  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Evento no encontrado</h2>
        <Link href="/" className="text-accent hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const onSubmit = (data: TicketForm) => {
    // Aquí iría la integración con Mercado Pago
    console.log('Datos del formulario:', data);
    alert('¡Gracias por tu compra! La integración con Mercado Pago estará disponible próximamente.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Link
        href="/"
        className="inline-flex items-center text-zinc-400 hover:text-white mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Volver a eventos
      </Link>

      <div className="space-y-8">
        <div>
          <EventDetailImage image={event.image} title={event.name} />
          <EventDetailTitle title={event.name} description={event.description} />
          <EventDate date={event.datetime} />
          <EventLocation venue={event.venue} />
          <EventAvailableTickets tickets={event.tickets} eventId={event.id} />
          <EventVenueLocation venue={event.venue} />
        </div>
      </div>
    </div>
  );
}