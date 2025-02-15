"use client";

import { featuredEventsList } from "@/services/events";
import { EventCard } from "./EventCard";
import { SectionTitle } from "./ui/SectionTitle";
import { Section } from "./ui/Section";

export function FeaturedEvents() {
  const events = featuredEventsList();

  return (
    <Section>
      <SectionTitle>UPCOMING EVENTS</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Section>
  );
}