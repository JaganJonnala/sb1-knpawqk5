import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { useBookingStore } from "../store/booking";
import { mockServiceProviders } from "../constants/mockData";
import { showError } from "../utils/alerts";
import { format } from "date-fns";

export function BookingConfirmationScreen({ route, navigation }: NavigationProps<"BookingConfirmation">) {
  const { bookingId } = route.params;
  const booking = useBookingStore(state => state.bookings.find(b => b.id === bookingId));
  
  if (!booking) {
    showError("Booking not found");
    navigation.navigate("Home");
    return null;
  }

  const provider = mockServiceProviders.find(p => p.id === booking.providerId);
  const service = provider?.services.find(s => s.id === booking.serviceId);

  if (!provider || !service) {
    showError("Service details not found");
    navigation.navigate("Home");
    return null;
  }

  return (
    <stackLayout className="p-4">
      <label className="text-2xl font-bold mb-4">Booking Confirmed!</label>
      
      <gridLayout className="bg-white p-4 rounded-lg mb-4" rows="auto, auto, auto, auto" columns="auto, *">
        <label row={0} col={0} className="font-semibold" text="Service:" />
        <label row={0} col={1} text={service.name} />
        
        <label row={1} col={0} className="font-semibold" text="Provider:" />
        <label row={1} col={1} text={provider.name} />
        
        <label row={2} col={0} className="font-semibold" text="Date:" />
        <label row={2} col={1} text={format(new Date(booking.date), "PPpp")} />
        
        <label row={3} col={0} className="font-semibold" text="Price:" />
        <label row={3} col={1} text={`$${booking.price}`} />
      </gridLayout>

      <button
        className="btn btn-primary p-4 rounded mb-2"
        text="View My Bookings"
        onTap={() => navigation.navigate("Bookings")}
      />
      
      <button
        className="btn btn-secondary p-4 rounded"
        text="Back to Home"
        onTap={() => navigation.navigate("Home")}
      />
    </stackLayout>
  );
}