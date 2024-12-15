import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { useBookingStore } from "../store/booking";
import { mockServiceProviders } from "../constants/mockData";
import { format } from "date-fns";

export function BookingsScreen({ navigation }: NavigationProps<"Bookings">) {
  const bookings = useBookingStore(state => state.bookings);
  const cancelBooking = useBookingStore(state => state.cancelBooking);

  return (
    <scrollView>
      <stackLayout className="p-4">
        <label className="text-2xl font-bold mb-4">My Bookings</label>
        
        {bookings.length === 0 ? (
          <label className="text-gray-600 text-center">No bookings found</label>
        ) : (
          bookings.map(booking => {
            const provider = mockServiceProviders.find(p => p.id === booking.providerId);
            const service = provider?.services.find(s => s.id === booking.serviceId);
            
            if (!provider || !service) return null;

            return (
              <gridLayout
                key={booking.id}
                className="bg-white p-4 rounded-lg mb-4"
                rows="auto, auto, auto"
                columns="*, auto"
              >
                <stackLayout row={0} col={0}>
                  <label className="font-semibold" text={service.name} />
                  <label className="text-sm text-gray-600" text={provider.name} />
                </stackLayout>
                
                <label
                  row={0}
                  col={1}
                  className={`text-sm ${
                    booking.status === "confirmed" ? "text-green-600" :
                    booking.status === "cancelled" ? "text-red-600" :
                    "text-yellow-600"
                  }`}
                  text={booking.status.toUpperCase()}
                />
                
                <label
                  row={1}
                  col={0}
                  colSpan={2}
                  className="text-sm text-gray-600"
                  text={format(new Date(booking.date), "PPpp")}
                />
                
                {booking.status === "pending" && (
                  <button
                    row={2}
                    col={0}
                    colSpan={2}
                    className="btn btn-secondary p-2 mt-2 rounded"
                    text="Cancel Booking"
                    onTap={() => cancelBooking(booking.id)}
                  />
                )}
              </gridLayout>
            );
          })
        )}
      </stackLayout>
    </scrollView>
  );
}