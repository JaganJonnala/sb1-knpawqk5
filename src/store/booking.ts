import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Booking } from '../types/models';
import { z } from 'zod';
import localforage from 'localforage';

const bookingSchema = z.object({
  id: z.string(),
  userId: z.string(),
  providerId: z.string(),
  serviceId: z.string(),
  date: z.string(),
  status: z.enum(['pending', 'confirmed', 'completed', 'cancelled']),
  price: z.number(),
});

interface BookingState {
  bookings: Booking[];
  isLoading: boolean;
  error: string | null;
  addBooking: (booking: Omit<Booking, 'id'>) => Promise<Booking>;
  cancelBooking: (bookingId: string) => Promise<void>;
  getBookings: () => Booking[];
  getBookingsByStatus: (status: Booking['status']) => Booking[];
}

export const useBookingStore = create<BookingState>()(
  persist(
    immer((set, get) => ({
      bookings: [],
      isLoading: false,
      error: null,

      addBooking: async (bookingData) => {
        set({ isLoading: true, error: null });
        try {
          const booking: Booking = {
            ...bookingData,
            id: Math.random().toString(),
          };
          bookingSchema.parse(booking);
          set((state) => {
            state.bookings.push(booking);
          });
          return booking;
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Failed to create booking';
          set({ error: message });
          throw new Error(message);
        } finally {
          set({ isLoading: false });
        }
      },

      cancelBooking: async (bookingId) => {
        set({ isLoading: true, error: null });
        try {
          set((state) => {
            const booking = state.bookings.find((b) => b.id === bookingId);
            if (booking) {
              booking.status = 'cancelled';
            }
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Failed to cancel booking';
          set({ error: message });
          throw new Error(message);
        } finally {
          set({ isLoading: false });
        }
      },

      getBookings: () => get().bookings,

      getBookingsByStatus: (status) => 
        get().bookings.filter((booking) => booking.status === status),
    })),
    {
      name: 'booking-storage',
      storage: {
        getItem: async (name) => {
          const value = await localforage.getItem(name);
          return value ?? null;
        },
        setItem: async (name, value) => {
          await localforage.setItem(name, value);
        },
        removeItem: async (name) => {
          await localforage.removeItem(name);
        },
      },
    }
  )
);