'use client';

import { TicketData } from '@/lib/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ticketSchema = z.object({
  quantity: z.number().min(1).max(10),
  name: z.string().min(3),
  email: z.string().email(),
});

type TicketForm = z.infer<typeof ticketSchema>;

interface BuyEventTicketsFormProps {
  ticket: TicketData
  eventId: string
}

export default function BuyEventTicketsForm({ ticket, eventId }: BuyEventTicketsFormProps) {
  const { type: ticketType } = ticket
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketForm>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const onSubmit = (data: TicketForm) => {
    // Aquí iría la integración con Mercado Pago
    console.log('Datos del formulario:', { ...data, ticketType, eventId });
    alert('¡Gracias por tu compra! La integración con Mercado Pago estará disponible próximamente.');
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Comprar Tickets - {ticket.typeLabel}</h2>

      <div className="mb-6 p-4 bg-zinc-800 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-zinc-400">Precio por ticket:</span>
          <span className="text-xl font-bold">${ticket.price}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Tickets disponibles:</span>
          <span>{ticket.availableTickets}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Cantidad de tickets
          </label>
          <input
            type="number"
            {...register('quantity', { valueAsNumber: true })}
            className="w-full bg-zinc-800 rounded px-3 py-2"
            max={ticket.availableTickets}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full bg-zinc-800 rounded px-3 py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full bg-zinc-800 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full btn-primary py-2"
        >
          Comprar
        </button>
      </form>
    </div>
  );
}