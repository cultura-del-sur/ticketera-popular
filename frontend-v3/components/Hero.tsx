import Link from 'next/link';
import { Music2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative -mx-4 mb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
        alt="Underground Events"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Music2 className="text-accent" size={24} />
            <span className="text-accent font-semibold">Underground Events</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Descubre la escena cultural alternativa
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            Eventos únicos en espacios no convencionales. Arte, música y experiencias que desafían lo establecido.
          </p>
          <Link
            href="#eventos"
            className="btn-primary inline-block text-lg"
          >
            Ver Eventos
          </Link>
        </div>
      </div>
    </div>
  );
}