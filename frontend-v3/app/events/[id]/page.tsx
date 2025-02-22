'use client';

import { events } from '@/lib/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Calendar, MapPin, Ticket } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ticketSchema = z.object({
  quantity: z.number().min(1).max(10),
  name: z.string().min(3),
  email: z.string().email(),
});

type TicketForm = z.infer<typeof ticketSchema>;

export default function EventPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);

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
    <div>
      <Link
        href="/"
        className="inline-flex items-center text-zinc-400 hover:text-white mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Volver a eventos
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="text-zinc-400 mb-4">{event.description}</p>

          <div className="flex items-center text-zinc-400 mb-2">
            <Calendar size={20} className="mr-2" />
            {new Date(event.date).toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>

          <div className="flex items-center text-zinc-400 mb-4">
            <MapPin size={20} className="mr-2" />
            {event.venue}
          </div>

          <div className="flex items-center text-zinc-400 mb-4">
            <Ticket size={20} className="mr-2" />
            {event.availableTickets} tickets disponibles
          </div>

          <div className="text-2xl font-bold mb-4">
            ${event.price}
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Comprar Tickets</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Cantidad de tickets
              </label>
              <input
                type="number"
                {...register('quantity', { valueAsNumber: true })}
                className="w-full bg-zinc-800 rounded px-3 py-2"
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
      </div>
    </div>
  );
}