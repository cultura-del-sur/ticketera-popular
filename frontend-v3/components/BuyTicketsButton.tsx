'use client';

import Link from 'next/link';
import { Ticket } from 'lucide-react';

interface BuyTicketsButtonProps {
  eventId: string;
  className?: string;
}

export default function BuyTicketsButton({ eventId, className = '' }: BuyTicketsButtonProps) {
  return (
    <Link
      href={`/events/${eventId}`}
      className={`btn-primary inline-flex items-center gap-2 ${className}`}
    >
      <Ticket size={16} />
      <span>Comprar Tickets</span>
    </Link>
  );
}