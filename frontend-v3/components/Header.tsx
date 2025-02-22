'use client';

import Link from 'next/link';
import { Music2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-zinc-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music2 className="text-accent" size={24} />
            <h1 className="text-2xl font-bold text-accent">Underground Events</h1>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/musica"
              className={`hover:text-accent transition-colors ${
                isActive('/musica') ? 'text-accent' : 'text-zinc-400'
              }`}
            >
              Música
            </Link>
            <Link
              href="/teatro"
              className={`hover:text-accent transition-colors ${
                isActive('/teatro') ? 'text-accent' : 'text-zinc-400'
              }`}
            >
              Teatro
            </Link>
            <Link
              href="/noticias"
              className={`hover:text-accent transition-colors ${
                isActive('/noticias') ? 'text-accent' : 'text-zinc-400'
              }`}
            >
              Noticias
            </Link>
            <Link
              href="/login"
              className="btn-primary"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}