import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { bookingService } from '../services/booking/service';
import { Booking } from '../services/booking/types';

export default function BookingConfirmation() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooking = async () => {
      if (!bookingId) return;
      
      try {
        setIsLoading(true);
        const data = await bookingService.getBookingById(bookingId);
        if (!data) {
          throw new Error('Booking not found');
        }
        setBooking(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load booking');
      } finally {
        setIsLoading(false);
      }
    };

    loadBooking();
  }, [bookingId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error || 'Booking not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-green-600">Booking Confirmed!</h1>
        </div>

        <div className="border-t border-b py-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Service</p>
              <p className="font-semibold">{booking.serviceName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Provider</p>
              <p className="font-semibold">{booking.partnerName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date & Time</p>
              <p className="font-semibold">
                {format(parseISO(booking.date), 'PPp')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Price</p>
              <p className="font-semibold">${booking.price}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link to="/bookings" className="btn btn-primary flex-1">
            View My Bookings
          </Link>
          <Link to="/" className="btn btn-secondary flex-1">
            Book Another Service
          </Link>
        </div>
      </div>
    </div>
  );
}