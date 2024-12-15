import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { useStore } from '../store';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { BOOKING_STATUS } from '../services/booking/constants';

export default function Bookings() {
  const { user, bookings, loadUserBookings, cancelBooking, isLoading } = useStore();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      loadUserBookings(user.id).catch(err => {
        setError(err instanceof Error ? err.message : 'Failed to load bookings');
      });
    }
  }, [user, loadUserBookings]);

  const filterBookings = () => {
    const now = new Date();
    return bookings.filter(booking => {
      const bookingDate = parseISO(booking.date);
      switch (selectedFilter) {
        case 'upcoming':
          return bookingDate >= now;
        case 'past':
          return bookingDate < now;
        default:
          return true;
      }
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case BOOKING_STATUS.CONFIRMED:
        return 'bg-green-100 text-green-800';
      case BOOKING_STATUS.CANCELLED:
        return 'bg-red-100 text-red-800';
      case BOOKING_STATUS.COMPLETED:
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const handleCancel = async (bookingId: string) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await cancelBooking(bookingId);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to cancel booking');
      }
    }
  };

  const filteredBookings = filterBookings();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <div className="flex gap-2">
            {['all', 'upcoming', 'past'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter as any)}
                className={`px-4 py-2 rounded-lg ${
                  selectedFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center py-8">
            <LoadingSpinner />
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No bookings found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {booking.serviceName}
                    </h3>
                    <p className="text-gray-600">{booking.partnerName}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="font-medium">
                      {format(parseISO(booking.date), 'PPp')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-medium">${booking.price}</p>
                  </div>
                </div>

                {booking.status === BOOKING_STATUS.CONFIRMED && (
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}