import React from 'react';
import { ServiceGrid } from '../components/home/ServiceGrid';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find Professional Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book trusted professionals for all your needs
        </p>
      </div>
      <ServiceGrid />
    </div>
  );
}