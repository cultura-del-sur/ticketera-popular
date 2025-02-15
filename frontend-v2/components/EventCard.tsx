import { CalendarDays, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { I_EventListItem } from "@/types/event";

interface EventCardProps {
  event: I_EventListItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-zinc-900">
      <div className="aspect-[4/3] relative">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-4 space-y-2 text-gray-400">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ticket size={16} />
            <span>${event.price}</span>
          </div>
        </div>
        <Link href={`/event/${event.id}`} className="block">
          <button className="w-full rounded-md bg-white py-2 text-black transition-colors hover:bg-gray-200">
            GET TICKETS
          </button>
        </Link>
      </div>
    </article>
  );
}