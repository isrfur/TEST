
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

/**
 * Address: עוזי חיטמן 3, עכו (Uzi Hitman 3, Acre)
 * Coordinates: 32.9302, 35.0845
 */
const TARGET_COORDS: [number, number] = [32.9302, 35.0845];

export const BananaMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView(TARGET_COORDS, 17);
    mapInstanceRef.current = map;

    // Add Tile Layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Custom Banana Icon using DivIcon to use an Emoji
    const bananaIcon = L.divIcon({
      html: `
        <div style="font-size: 40px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); cursor: pointer;">
          🍌
        </div>
      `,
      className: 'banana-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 30],
    });

    // Add Marker
    const marker = L.marker(TARGET_COORDS, { icon: bananaIcon }).addTo(map);
    
    // Add Popup
    marker.bindPopup(`
      <div style="text-align: right; direction: rtl; font-family: sans-serif;">
        <strong style="color: #ca8a04;">עוזי חיטמן 3, עכו</strong><br/>
        הבננה הגיעה לצפון!
      </div>
    `).openPopup();

    // Fix for Leaflet initialization in hidden containers
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="w-full h-full" />
  );
};
