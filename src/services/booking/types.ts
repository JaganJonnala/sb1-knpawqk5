import { BookingStatus } from './constants';

export interface CreateBookingData {
  userId: string;
  userName: string;
  partnerId: string;
  serviceId: string;
  date: string;
  price: number;
  serviceName: string;
  partnerName: string;
}

export interface Booking extends CreateBookingData {
  id: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}