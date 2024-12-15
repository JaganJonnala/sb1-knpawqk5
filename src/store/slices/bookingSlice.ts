import { StateCreator } from 'zustand';
import { Booking, CreateBookingData } from '../../services/booking/types';
import { bookingService } from '../../services/booking/service';
import { BOOKING_STATUS } from '../../services/booking/constants';

export interface BookingState {
  bookings: Booking[];
  isLoading: boolean;
  error: string | null;
  createBooking: (data: CreateBookingData) => Promise<Booking>;
  loadUserBookings: (userId: string) => Promise<void>;
  loadPartnerBookings: (partnerId: string) => Promise<void>;
  acceptBooking: (bookingId: string) => Promise<void>;
  rejectBooking: (bookingId: string) => Promise<void>;
  completeBooking: (bookingId: string) => Promise<void>;
  cancelBooking: (bookingId: string) => Promise<void>;
}

export const createBookingSlice: StateCreator<BookingState> = (set, get) => ({
  bookings: [],
  isLoading: false,
  error: null,

  createBooking: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const booking = await bookingService.createBooking(data);
      set(state => ({
        bookings: [...state.bookings, booking]
      }));
      return booking;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create booking';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  loadUserBookings: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      const bookings = await bookingService.getBookingsByUserId(userId);
      set({ bookings });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load bookings';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  loadPartnerBookings: async (partnerId) => {
    set({ isLoading: true, error: null });
    try {
      const bookings = await bookingService.getBookingsByPartnerId(partnerId);
      set({ bookings });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load bookings';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  acceptBooking: async (bookingId) => {
    set({ isLoading: true, error: null });
    try {
      const { user } = get() as any;
      await bookingService.updateBookingStatus(bookingId, BOOKING_STATUS.CONFIRMED, user.id, true);
      set(state => ({
        bookings: state.bookings.map(booking =>
          booking.id === bookingId
            ? { ...booking, status: BOOKING_STATUS.CONFIRMED }
            : booking
        )
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to accept booking';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  rejectBooking: async (bookingId) => {
    set({ isLoading: true, error: null });
    try {
      const { user } = get() as any;
      await bookingService.updateBookingStatus(bookingId, BOOKING_STATUS.REJECTED, user.id, true);
      set(state => ({
        bookings: state.bookings.map(booking =>
          booking.id === bookingId
            ? { ...booking, status: BOOKING_STATUS.REJECTED }
            : booking
        )
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to reject booking';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  completeBooking: async (bookingId) => {
    set({ isLoading: true, error: null });
    try {
      const { user } = get() as any;
      await bookingService.updateBookingStatus(bookingId, BOOKING_STATUS.COMPLETED, user.id, true);
      set(state => ({
        bookings: state.bookings.map(booking =>
          booking.id === bookingId
            ? { ...booking, status: BOOKING_STATUS.COMPLETED }
            : booking
        )
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to complete booking';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  cancelBooking: async (bookingId) => {
    set({ isLoading: true, error: null });
    try {
      const { user } = get() as any;
      await bookingService.updateBookingStatus(bookingId, BOOKING_STATUS.CANCELLED, user.id, false);
      set(state => ({
        bookings: state.bookings.map(booking =>
          booking.id === bookingId
            ? { ...booking, status: BOOKING_STATUS.CANCELLED }
            : booking
        )
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to cancel booking';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  }
});