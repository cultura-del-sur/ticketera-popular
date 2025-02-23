export interface TicketData {
  type_slug: string;
  type_label: string;
  price: number;
  available_tickets: number;
}

export interface Venue {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface Event {
  id: string;
  name: string;
  description: string;
  datetime: string;
  venue: Venue;
  image: string;
  tickets: TicketData[];
  tags: string[];
}

export const events: Event[] = [
  {
    id: "1",
    name: "Noche de Jazz Experimental",
    description: "Una noche de improvisación y fusión de jazz con música electrónica experimental.",
    datetime: "2024-05-15T20:00:00",
    venue: {
      id: "sotano-cultural",
      name: "El Sótano Cultural",
      location: {
        latitude: -34.598889,
        longitude: -58.382222
      }
    },
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
    tickets: [
      { type_slug: "general", type_label: "General", price: 25.00, available_tickets: 30 },
      { type_slug: "vip", type_label: "VIP", price: 45.00, available_tickets: 0 }
    ],
    tags: ["jazz", "experimental", "electrónica"]
  },
  {
    id: "2",
    name: "Festival de Arte Sonoro",
    description: "Instalaciones sonoras, performances y música noise en espacios abandonados.",
    datetime: "2024-05-20T19:00:00",
    venue: {
      id: "fabrica-abandonada",
      name: "Fábrica Abandonada",
      location: {
        latitude: -34.606667,
        longitude: -58.435556
      }
    },
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    tickets: [
      { type_slug: "early-bird", type_label: "Early Bird", price: 20.00, available_tickets: 50 },
      { type_slug: "regular", type_label: "Regular", price: 30.00, available_tickets: 30 },
      { type_slug: "premium", type_label: "Premium", price: 50.00, available_tickets: 20 }
    ],
    tags: ["arte sonoro", "experimental", "noise"]
  },
  {
    id: "3",
    name: "Poesía y Drone",
    description: "Lecturas de poesía contemporánea acompañadas de música drone en vivo.",
    datetime: "2024-05-25T21:00:00",
    venue: {
      id: "biblioteca-alternativa",
      name: "Biblioteca Alternativa",
      location: {
        latitude: -34.603333,
        longitude: -58.378889
      }
    },
    image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b",
    tickets: [
      { type_slug: "estudiante", type_label: "Estudiante", price: 10.00, available_tickets: 15 },
      { type_slug: "general", type_label: "General", price: 15.00, available_tickets: 15 }
    ],
    tags: ["poesía", "drone", "ambient"]
  }
];