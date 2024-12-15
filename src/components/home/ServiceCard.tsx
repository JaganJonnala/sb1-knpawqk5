import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCategory } from '../../constants/services';

type ServiceCardProps = {
  category: ServiceCategory;
};

export function ServiceCard({ category }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${category.id}`}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] transform">
        <div className="flex flex-col items-center text-center">
          <span className="text-6xl mb-6 transition-transform duration-200 group-hover:scale-110">
            {category.icon}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {category.title}
          </h3>
          <p className="text-gray-600">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}