export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  price: number;
  image: string;
  availableTickets: number;
  tags: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "Noche de Jazz Experimental",
    description: "Una noche de improvisación y fusión de jazz con música electrónica experimental.",
    date: "2024-05-15T20:00:00",
    venue: "El Sótano Cultural",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
    availableTickets: 50,
    tags: ["jazz", "experimental", "electrónica"]
  },
  {
    id: "2",
    title: "Festival de Arte Sonoro",
    description: "Instalaciones sonoras, performances y música noise en espacios abandonados.",
    date: "2024-05-20T19:00:00",
    venue: "Fábrica Abandonada",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    availableTickets: 100,
    tags: ["arte sonoro", "experimental", "noise"]
  },
  {
    id: "3",
    title: "Poesía y Drone",
    description: "Lecturas de poesía contemporánea acompañadas de música drone en vivo.",
    date: "2024-05-25T21:00:00",
    venue: "Biblioteca Alternativa",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b",
    availableTickets: 30,
    tags: ["poesía", "drone", "ambient"]
  }
];