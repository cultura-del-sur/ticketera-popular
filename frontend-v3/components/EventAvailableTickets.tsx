import { Ticket } from 'lucide-react';
import Link from 'next/link';

import { TicketData } from '@/lib/data';

interface EventAvailableTicketsProps {
  tickets: TicketData[];
  eventId: string;
}

export default function EventAvailableTickets({ tickets, eventId }: EventAvailableTicketsProps) {
  return (
    <div className="space-y-4">
      {tickets.map((ticket, index) => (
        <div key={index} className="border-b border-zinc-200 pb-4 last:border-b-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{ticket.typeLabel}</span>
            <span className="text-xl font-bold">${ticket.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-zinc-400">
              <Ticket size={16} className="mr-2" />
              {ticket.availableTickets === 0 ? (
                <span className="text-red-500 font-medium">Agotado</span>
              ) : (
                <span>{ticket.availableTickets} tickets disponibles</span>
              )}
            </div>
            {ticket.availableTickets > 0 && (
              <Link
                href={`/events/${eventId}/buy-tickets?ticketType=${encodeURIComponent(ticket.type)}`}
                className="btn-primary text-sm px-4 py-2"
              >
                Comprar
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}