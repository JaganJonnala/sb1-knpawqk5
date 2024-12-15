export const BOOKINGS_COLLECTION = 'bookings';

export const BOOKING_STATUS = {
  PENDING: 'pending',      // Initial state when user books
  CONFIRMED: 'confirmed',  // After partner accepts
  COMPLETED: 'completed',  // After service is delivered
  CANCELLED: 'cancelled',  // If either party cancels
  REJECTED: 'rejected'     // If partner rejects the booking
} as const;

export type BookingStatus = typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

export const BOOKING_RULES = {
  MIN_HOURS_IN_ADVANCE: 2,
  MAX_DAYS_IN_ADVANCE: 30,
  SLOT_DURATION: 30, // minutes
  CANCELLATION_HOURS: 24 // hours before service can be cancelled
};