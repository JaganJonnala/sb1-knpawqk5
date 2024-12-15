import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../store';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ServiceCard } from './components/ServiceCard';

export default function ServiceList() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { services, loadServicesByCategory, isLoading, error, user } = useStore();
  
  useEffect(() => {
    if (categoryId) {
      loadServicesByCategory(categoryId).catch(console.error);
    }
  }, [categoryId, loadServicesByCategory]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  if (!services.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6">
        {services.map((service) => {
          const isOwnService = user?.id === service.partner.userId;
          
          return (
            <ServiceCard 
              key={service.id}
              service={service}
              isOwnService={isOwnService}
            />
          );
        })}
      </div>
    </div>
  );
}