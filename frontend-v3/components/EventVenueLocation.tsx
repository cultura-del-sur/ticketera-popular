'use client';

import { Venue } from '@/lib/data';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

interface EventVenueLocationProps {
  venue: Venue;
}

const ICON = icon({
  iconUrl: "/gps-2.png",
  iconSize: [48, 48],
})
export default function EventVenueLocation({ venue }: EventVenueLocationProps) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={[venue.location.latitude, venue.location.longitude]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[venue.location.latitude, venue.location.longitude]}
            icon={ICON}>

            <Popup>
              {venue.name}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}