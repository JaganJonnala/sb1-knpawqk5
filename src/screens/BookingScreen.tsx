import * as React from "react";
import { NavigationProps } from "../types/navigation";
import { mockServiceProviders } from "../constants/mockData";
import { useBookingStore } from "../store/booking";
import { useAuthStore } from "../store/auth";
import { showError } from "../utils/alerts";
import { format } from "date-fns";

export function BookingScreen({ route, navigation }: NavigationProps<"Booking">) {
  const { providerId, serviceId } = route.params;
  const provider = mockServiceProviders.find(p => p.id === providerId);
  const service = provider?.services.find(s => s.id === serviceId);
  const user = useAuthStore(state => state.user);
  const addBooking = useBookingStore(state => state.addBooking);
  
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState("10:00");
  
  if (!provider || !service || !user) {
    showError("Invalid booking details");
    navigation.goBack();
    return null;
  }

  const handleBooking = () => {
    const booking = {
      id: Math.random().toString(),
      userId: user.id,
      providerId: provider.id,
      serviceId: service.id,
      date: `${format(selectedDate, "yyyy-MM-dd")} ${selectedTime}`,
      status: "pending" as const,
      price: service.price
    };

    addBooking(booking);
    navigation.navigate("BookingConfirmation", { bookingId: booking.id });
  };

  return (
    <scrollView>
      <stackLayout className="p-4">
        <label className="text-2xl font-bold mb-4">Book Service</label>
        
        <gridLayout className="bg-white p-4 rounded-lg mb-4" rows="auto, auto" columns="*, auto">
          <label row={0} col={0} className="font-semibold" text={service.name} />
          <label row={0} col={1} className="text-blue-600" text={`$${service.price}`} />
          <label row={1} col={0} colSpan={2} className="text-sm text-gray-600" text={service.description} />
        </gridLayout>

        <label className="font-semibold mb-2">Select Date</label>
        <datePicker
          className="mb-4"
          date={selectedDate}
          onDateChange={(args) => setSelectedDate(args.value)}
        />

        <label className="font-semibold mb-2">Select Time</label>
        <listPicker
          className="mb-4"
          items={["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]}
          selectedIndex={1}
          onSelectedIndexChange={(args) => setSelectedTime(args.value)}
        />

        <button
          className="btn btn-primary p-4 rounded"
          text="Confirm Booking"
          onTap={handleBooking}
        />
      </stackLayout>
    </scrollView>
  );
}