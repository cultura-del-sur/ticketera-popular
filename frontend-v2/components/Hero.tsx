import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&auto=format&fit=crop&q=80"
        alt="Underground event"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          UNDERGROUND<br />CULTURE
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Discover the most unique events in the underground scene
        </p>
        <button className="group relative px-8 py-3 text-lg font-semibold">
          <div className="absolute inset-0 border border-white/50 transition-all group-hover:scale-105"></div>
          <span className="relative">EXPLORE EVENTS</span>
        </button>
      </div>
    </div>
  );
}