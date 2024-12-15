import { Link } from 'react-router-dom';
import { ServiceWithPartner } from '../../services/services/types';

interface ServiceCardProps {
  service: ServiceWithPartner;
  isOwnService: boolean;
}

export function ServiceCard({ service, isOwnService }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
          {service.partner.businessName.charAt(0)}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            {isOwnService && (
              <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                Your Service
              </span>
            )}
          </div>
          <p className="text-gray-600">{service.description}</p>
          <p className="text-sm text-gray-500">
            by {service.partner.businessName}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-primary-600">
            ${service.price}
          </p>
          <p className="text-sm text-gray-500">
            {service.duration} min
          </p>
          {isOwnService ? (
            <Link
              to="/partner/dashboard"
              className="btn btn-secondary mt-2 text-sm"
            >
              Manage Service
            </Link>
          ) : (
            <Link
              to={`/service/${service.partner.id}`}
              className="btn btn-primary mt-2 text-sm"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}