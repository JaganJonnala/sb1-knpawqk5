import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ServiceWithPartner } from '../services/services/types';
import { servicesService } from '../services/services/service';

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { providerId } = useParams<{ providerId: string }>();
  const { user } = useStore();
  const [services, setServices] = useState<ServiceWithPartner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      if (!providerId) return;
      
      try {
        setIsLoading(true);
        const data = await servicesService.getServicesByPartnerId(providerId);
        setServices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load service details');
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, [providerId]);

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

  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services found for this provider</p>
      </div>
    );
  }

  const provider = services[0].partner;
  const isOwnService = user?.id === provider.userId;

  if (isOwnService) {
    navigate('/partner/dashboard');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
            {provider.businessName.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{provider.businessName}</h1>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-gray-600">
                {provider.rating || 'New'} ({provider.reviewCount || 0} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-600">{provider.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <div className="grid gap-4">
            {services.map(service => (
              <div
                key={service.id}
                className="border rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary-600">
                      ${service.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      {service.duration} min
                    </p>
                  </div>
                </div>
                <Link
                  to={`/booking/${provider.id}/${service.id}`}
                  className="btn btn-primary w-full text-center"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}