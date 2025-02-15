import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-4 text-2xl font-bold">JOIN THE UNDERGROUND</h3>
            <p className="mb-6 text-gray-400">
              Subscribe to our newsletter and be the first to know about exclusive events, 
              pre-sale tickets, and underground culture news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none"
              />
              <button className="rounded-md bg-white px-6 py-2 font-semibold text-black transition-colors hover:bg-gray-200">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 md:items-end">
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
            <button className="group relative w-fit px-6 py-2 text-sm font-semibold">
              <div className="absolute inset-0 border border-white/50 transition-all group-hover:scale-105"></div>
              <span className="relative flex items-center gap-2">
                <Mail size={16} />
                CONTACT US
              </span>
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold">EVENTS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Upcoming Events</a></li>
              <li><a href="#" className="hover:text-white">Past Events</a></li>
              <li><a href="#" className="hover:text-white">Featured Artists</a></li>
              <li><a href="#" className="hover:text-white">Venues</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Support</a></li>
              <li><a href="#" className="hover:text-white">Ticket Info</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Underground. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}