import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AuthState, createAuthSlice } from './slices/authSlice';
import { BookingState, createBookingSlice } from './slices/bookingSlice';
import { PartnerState, createPartnerSlice } from './slices/partnerSlice';
import { ServicesState, createServicesSlice } from './slices/servicesSlice';

interface StoreState extends AuthState, BookingState, PartnerState, ServicesState {}

export const useStore = create<StoreState>()(
  devtools(
    immer((set, get) => ({
      ...createAuthSlice(set, get),
      ...createBookingSlice(set, get),
      ...createPartnerSlice(set, get),
      ...createServicesSlice(set, get),
    }))
  )
);