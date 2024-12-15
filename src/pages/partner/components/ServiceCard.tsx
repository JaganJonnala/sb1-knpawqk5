import { memo } from 'react';
import { useStore } from '../../../store';
import { ServiceData } from '../../../services/services/types';

interface ServiceCardProps {
  service: ServiceData;
  onEdit: () => void;
}

export const ServiceCard = memo(function ServiceCard({ service, onEdit }: ServiceCardProps) {
  const { deleteService } = useStore();

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this service?')) {
      return;
    }

    try {
      await deleteService(service.id);
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
          <p className="text-sm text-gray-500 mt-1">Category: {service.category}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-primary-600">
            ${service.price}
          </p>
          <p className="text-sm text-gray-500">
            {service.duration} min
          </p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={onEdit}
              className="text-primary-600 hover:text-primary-700"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});