'use client';

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { events } from '@/lib/data';
import BuyEventTicketsForm from '@/components/BuyEventTicketsForm';
import EventBrief from '@/components/EventBrief';

type TicketForm = {
  quantity: number;
  name: string;
  email: string;
};


export default function BuyTicketsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const ticketType = searchParams.get('ticketType');
  const event = events.find((e) => e.id === params.id);
  const ticket = event?.tickets.find((t) => t.type === ticketType);

  if (!event || !ticket) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Ticket no encontrado</h2>
        <Link href="/" className="text-accent hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }



  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Link
        href={`/events/${event.id}`}
        className="inline-flex items-center text-zinc-400 hover:text-white mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Volver al evento
      </Link>

      <EventBrief
        title={event.title}
        description={event.description}
        date={event.date}
        venue={event.venue}
      />

      <BuyEventTicketsForm eventId={event.id} ticket={ticket} />
    </div>
  );
}