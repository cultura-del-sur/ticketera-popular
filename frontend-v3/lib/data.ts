export interface TicketType {
  type: string;
  price: number;
  availableTickets: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  image: string;
  tickets: TicketType[];
  tags: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "Noche de Jazz Experimental",
    description: "Una noche de improvisación y fusión de jazz con música electrónica experimental.",
    date: "2024-05-15T20:00:00",
    venue: "El Sótano Cultural",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
    tickets: [
      { type: "General", price: 25.00, availableTickets: 30 },
      { type: "VIP", price: 45.00, availableTickets: 20 }
    ],
    tags: ["jazz", "experimental", "electrónica"]
  },
  {
    id: "2",
    title: "Festival de Arte Sonoro",
    description: "Instalaciones sonoras, performances y música noise en espacios abandonados.",
    date: "2024-05-20T19:00:00",
    venue: "Fábrica Abandonada",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    tickets: [
      { type: "Early Bird", price: 20.00, availableTickets: 50 },
      { type: "Regular", price: 30.00, availableTickets: 30 },
      { type: "Premium", price: 50.00, availableTickets: 20 }
    ],
    tags: ["arte sonoro", "experimental", "noise"]
  },
  {
    id: "3",
    title: "Poesía y Drone",
    description: "Lecturas de poesía contemporánea acompañadas de música drone en vivo.",
    date: "2024-05-25T21:00:00",
    venue: "Biblioteca Alternativa",
    image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b",
    tickets: [
      { type: "Estudiante", price: 10.00, availableTickets: 15 },
      { type: "General", price: 15.00, availableTickets: 15 }
    ],
    tags: ["poesía", "drone", "ambient"]
  }
];