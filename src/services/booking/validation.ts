import { addHours, addDays, isBefore, isAfter, parseISO } from 'date-fns';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { BOOKINGS_COLLECTION, BOOKING_STATUS, BOOKING_RULES } from './constants';

export async function validateBookingTime(date: string, serviceId: string): Promise<void> {
  const bookingTime = parseISO(date);
  const now = new Date();
  
  // Check minimum advance time
  const minTime = addHours(now, BOOKING_RULES.MIN_HOURS_IN_ADVANCE);
  if (isBefore(bookingTime, minTime)) {
    throw new Error(`Booking must be at least ${BOOKING_RULES.MIN_HOURS_IN_ADVANCE} hours in advance`);
  }

  // Check maximum advance time
  const maxTime = addDays(now, BOOKING_RULES.MAX_DAYS_IN_ADVANCE);
  if (isAfter(bookingTime, maxTime)) {
    throw new Error(`Booking cannot be more than ${BOOKING_RULES.MAX_DAYS_IN_ADVANCE} days in advance`);
  }

  // Check for existing bookings in the same time slot
  const q = query(
    collection(db, BOOKINGS_COLLECTION),
    where('serviceId', '==', serviceId),
    where('date', '==', date),
    where('status', 'in', [BOOKING_STATUS.PENDING, BOOKING_STATUS.CONFIRMED])
  );

  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    throw new Error('This time slot is already booked');
  }
}

export function validateStatusChange(
  currentStatus: string,
  newStatus: string,
  isPartner: boolean
): void {
  // Define valid status transitions for each role
  const validTransitions = {
    [BOOKING_STATUS.PENDING]: {
      partner: [BOOKING_STATUS.CONFIRMED, BOOKING_STATUS.REJECTED],
      customer: [BOOKING_STATUS.CANCELLED]
    },
    [BOOKING_STATUS.CONFIRMED]: {
      partner: [BOOKING_STATUS.COMPLETED],
      customer: [BOOKING_STATUS.CANCELLED]
    }
  };

  const role = isPartner ? 'partner' : 'customer';
  const allowedTransitions = validTransitions[currentStatus]?.[role] || [];

  if (!allowedTransitions.includes(newStatus)) {
    throw new Error(
      `Invalid status transition from ${currentStatus} to ${newStatus} for ${role}`
    );
  }
}