import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { servicesService } from '../services/services/service';
import { TIME_SLOTS } from '../services/booking/constants';
import { addDays, format } from 'date-fns';
import { ServiceWithPartner } from '../services/services/types';

export default function Booking() {
  const navigate = useNavigate();
  const { providerId, serviceId } = useParams<{ providerId: string; serviceId: string }>();
  const { user, createBooking, isLoading } = useStore();
  
  const [service, setService] = useState<ServiceWithPartner | null>(null);
  const [date, setDate] = useState(format(addDays(new Date(), 1), 'yyyy-MM-dd'));
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingService, setIsLoadingService] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      if (!serviceId || !providerId) return;
      
      try {
        setIsLoadingService(true);
        const services = await servicesService.getServicesByPartnerId(providerId);
        const foundService = services.find(s => s.id === serviceId);
        if (!foundService) {
          throw new Error('Service not found');
        }
        setService(foundService);
      } catch (err) {
        setError('Failed to load service details');
        console.error(err);
      } finally {
        setIsLoadingService(false);
      }
    };

    loadService();
  }, [serviceId, providerId]);

  if (isLoadingService) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!service || !user) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Service not found or user not authenticated</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const booking = await createBooking({
        userId: user.id,
        userName: user.name,
        partnerId: providerId!,
        serviceId: serviceId!,
        date: `${date}T${time}`,
        price: service.price,
        serviceName: service.name,
        partnerName: service.partner.businessName
      });
      
      navigate(`/booking/confirmation/${booking.id}`);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Booking failed');
    }
  };

  const minDate = format(addDays(new Date(), 1), 'yyyy-MM-dd');
  const maxDate = format(addDays(new Date(), 30), 'yyyy-MM-dd');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Book Service</h1>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
              {service.partner.businessName.charAt(0)}
            </div>
            <div>
              <h2 className="font-semibold">{service.partner.businessName}</h2>
              <p className="text-gray-600">{service.name}</p>
            </div>
            <div className="ml-auto">
              <p className="text-xl font-semibold text-primary-600">
                ${service.price}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
              min={minDate}
              max={maxDate}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input"
              required
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Confirming booking...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}