import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SERVICE_CATEGORIES } from '../../constants/services';

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICE_CATEGORIES.map((category) => (
        <ServiceCard key={category.id} category={category} />
      ))}
    </div>
  );
}