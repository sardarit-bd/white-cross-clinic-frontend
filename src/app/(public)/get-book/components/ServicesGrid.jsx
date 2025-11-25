"use client";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} onSelect={onSelect} />
      ))}
    </div>
  );
}
