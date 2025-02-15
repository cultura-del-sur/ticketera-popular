import { I_EventDetail, I_EventListItem } from "@/types/event";

export function featuredEventsList(): I_EventListItem[] {
  return [
    {
      id: 1,
      title: "Underground Bass Night",
      date: "2024-04-15",
      location: "The Dark Room",
      price: 25,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
      tags: ["electronic", "bass", "experimental"]
    },
    {
      id: 2,
      title: "Industrial Poetry Slam",
      date: "2024-04-20",
      location: "Factory 23",
      price: 15,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80",
      tags: ["poetry", "industrial", "performance"]
    },
    {
      id: 3,
      title: "Noise Art Festival",
      date: "2024-04-25",
      location: "The Warehouse",
      price: 30,
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&auto=format&fit=crop&q=80",
      tags: ["noise", "experimental", "art"]
    }
  ];
}

export function eventDetail(id: number): I_EventDetail | undefined {
  return {
    id: 3,
    title: "Noise Art Festival",
    date: "2024-04-25",
    location: "The Warehouse",
    price: 30,
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&auto=format&fit=crop&q=80",
    tags: ["noise", "experimental", "art"],
    description: "A festival of noise art and experimental music. Join us for a night of creativity and inspiration.",
    venue: "The Warehouse"
  }
}

