"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { I_EventDetail } from "@/types/event";
import { eventDetail } from "@/services/events";

// export async function generateStaticParams() {
//   // In a real application, you would fetch this from your API
//   // For now, we'll pre-render paths for events with IDs 1-10
//   return Array.from({ length: 10 }, (_, i) => ({
//     id: String(i + 1),
//   }));
// }

export default function EventPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<I_EventDetail | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await eventDetail(Number(params.id));
        setEvent(eventData);
      } catch (err) {
        setError('Failed to load event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p>Loading event details...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <p className="text-red-500">{error}</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{event?.title}</h1>
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {event?.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <div>
                <p className="text-xl mb-4">{event?.description}</p>
                <div className="space-y-4">
                  <p><span className="font-semibold">Date:</span> {event?.date}</p>
                  <p><span className="font-semibold">Location:</span> {event?.venue}</p>
                  <p><span className="font-semibold">Price:</span> ${event?.price}</p>
                </div>
                <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}