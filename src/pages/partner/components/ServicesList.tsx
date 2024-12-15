import { memo } from 'react';
import { useStore } from '../../../store';
import { ServiceCard } from './ServiceCard';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';

interface ServicesListProps {
  onEdit: (service: any) => void;
}

export const ServicesList = memo(function ServicesList({ onEdit }: ServicesListProps) {
  const { services, isLoading } = useStore();

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Services</h2>
      
      {services.length === 0 ? (
        <p className="text-gray-600">No services added yet.</p>
      ) : (
        <div className="space-y-4">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              service={service}
              onEdit={() => onEdit(service)}
            />
          ))}
        </div>
      )}
    </div>
  );
});