import { Music2, Ticket, CalendarDays } from "lucide-react";

export function Features() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <Music2 className="mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 text-xl font-bold">Curated Events</h3>
            <p className="text-gray-400">
              Carefully selected underground events that push boundaries
            </p>
          </div>
          <div className="text-center">
            <Ticket className="mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 text-xl font-bold">Secure Tickets</h3>
            <p className="text-gray-400">
              Easy and secure ticket purchasing process
            </p>
          </div>
          <div className="text-center">
            <CalendarDays className="mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 text-xl font-bold">Regular Updates</h3>
            <p className="text-gray-400">
              Stay updated with the latest underground events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}