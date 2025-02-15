"use client";

import { Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold tracking-wider">UNDERGROUND</h1>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li><a href="#" className="text-sm hover:text-gray-300">EVENTS</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">VENUES</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">ARTISTS</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">ABOUT</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 md:flex">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search events..."
              className="w-40 bg-transparent text-sm focus:outline-none"
            />
          </div>
          <button className="hidden rounded-full border border-white/50 px-4 py-1.5 text-sm transition-colors hover:bg-white hover:text-black md:block">
            SIGN IN
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}