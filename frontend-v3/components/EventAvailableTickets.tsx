import { Ticket } from 'lucide-react';

import { TicketType } from '@/lib/data';

interface EventAvailableTicketsProps {
  tickets: TicketType[];
}

export default function EventAvailableTickets({ tickets }: EventAvailableTicketsProps) {
  return (
    <div className="space-y-4">
      {tickets.map((ticket, index) => (
        <div key={index} className="border-b border-zinc-200 pb-4 last:border-b-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{ticket.type}</span>
            <span className="text-xl font-bold">${ticket.price}</span>
          </div>
          <div className="flex items-center text-zinc-400">
            <Ticket size={16} className="mr-2" />
            {ticket.availableTickets} tickets disponibles
          </div>
        </div>
      ))}
    </div>
  );
}