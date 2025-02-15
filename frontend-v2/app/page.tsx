"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeaturedEvents />
      <Features />
      <Footer />
    </main>
  );
}