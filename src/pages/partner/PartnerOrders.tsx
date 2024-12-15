import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { format, parseISO } from 'date-fns';
import { BOOKING_STATUS } from '../../services/booking/constants';

export default function PartnerOrders() {
  const navigate = useNavigate();
  const { 
    user, 
    partnerProfile, 
    loadPartnerBookings, 
    acceptBooking,
    rejectBooking,
    completeBooking,
    bookings, 
    isLoading 
  } = useStore();
  const [error, setError] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!partnerProfile) {
      navigate('/partner/register');
      return;
    }

    loadPartnerBookings(partnerProfile.id).catch(err => {
      setError(err instanceof Error ? err.message : 'Failed to load orders');
    });
  }, [user, partnerProfile, navigate, loadPartnerBookings]);

  const handleAccept = async (bookingId: string) => {
    try {
      await acceptBooking(bookingId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to accept booking');
    }
  };

  const handleReject = async (bookingId: string) => {
    if (!window.confirm('Are you sure you want to reject this booking?')) {
      return;
    }
    try {
      await rejectBooking(bookingId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reject booking');
    }
  };

  const handleComplete = async (bookingId: string) => {
    try {
      await completeBooking(bookingId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to complete booking');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case BOOKING_STATUS.CONFIRMED:
        return 'bg-green-100 text-green-800';
      case BOOKING_STATUS.CANCELLED:
        return 'bg-red-100 text-red-800';
      case BOOKING_STATUS.COMPLETED:
        return 'bg-blue-100 text-blue-800';
      case BOOKING_STATUS.REJECTED:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (selectedFilter === 'all') return true;
    return booking.status === selectedFilter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="flex gap-2">
            {['all', 'pending', 'confirmed', 'completed'].map((filter) => (
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
            <p className="text-gray-600">No orders found</p>
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
                    <p className="text-gray-600">Customer: {booking.userName}</p>
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

                {booking.status === BOOKING_STATUS.PENDING && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(booking.id)}
                      className="btn btn-primary flex-1"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(booking.id)}
                      className="btn btn-secondary flex-1"
                    >
                      Reject
                    </button>
                  </div>
                )}

                {booking.status === BOOKING_STATUS.CONFIRMED && (
                  <button
                    onClick={() => handleComplete(booking.id)}
                    className="btn btn-primary w-full"
                  >
                    Mark as Completed
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