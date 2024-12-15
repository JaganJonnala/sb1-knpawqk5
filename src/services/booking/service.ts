import { collection, addDoc, query, where, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Booking, CreateBookingData } from './types';
import { BOOKINGS_COLLECTION, BOOKING_STATUS } from './constants';
import { validateBookingTime, validateStatusChange } from './validation';
import { partnerService } from '../partner/service';

class BookingService {
  async createBooking(data: CreateBookingData): Promise<Booking> {
    try {
      // Validate booking time
      await validateBookingTime(data.date, data.serviceId);

      // Verify partner exists and owns the service
      const partner = await partnerService.getProfileById(data.partnerId);
      if (!partner) {
        throw new Error('Service provider not found');
      }

      const booking: Omit<Booking, 'id'> = {
        ...data,
        status: BOOKING_STATUS.PENDING,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), booking);
      return { id: docRef.id, ...booking };
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }

  async getBookingById(bookingId: string): Promise<Booking | null> {
    try {
      const bookingRef = doc(db, BOOKINGS_COLLECTION, bookingId);
      const bookingSnap = await getDoc(bookingRef);
      
      if (!bookingSnap.exists()) {
        return null;
      }

      return { id: bookingSnap.id, ...bookingSnap.data() } as Booking;
    } catch (error) {
      console.error('Error fetching booking:', error);
      throw error;
    }
  }

  async getBookingsByUserId(userId: string): Promise<Booking[]> {
    try {
      const q = query(
        collection(db, BOOKINGS_COLLECTION),
        where('userId', '==', userId)
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Booking[];
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      throw error;
    }
  }

  async getBookingsByPartnerId(partnerId: string): Promise<Booking[]> {
    try {
      const q = query(
        collection(db, BOOKINGS_COLLECTION),
        where('partnerId', '==', partnerId)
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Booking[];
    } catch (error) {
      console.error('Error fetching partner bookings:', error);
      throw error;
    }
  }

  async updateBookingStatus(
    bookingId: string, 
    newStatus: string, 
    userId: string, 
    isPartner: boolean
  ): Promise<void> {
    try {
      const bookingRef = doc(db, BOOKINGS_COLLECTION, bookingId);
      const bookingSnap = await getDoc(bookingRef);
      
      if (!bookingSnap.exists()) {
        throw new Error('Booking not found');
      }

      const booking = { id: bookingSnap.id, ...bookingSnap.data() } as Booking;

      // For partner actions, verify they own the service
      if (isPartner) {
        const partner = await partnerService.getProfileByUserId(userId);
        if (!partner || partner.id !== booking.partnerId) {
          throw new Error('Unauthorized: Not the service provider for this booking');
        }
      } else if (booking.userId !== userId) {
        throw new Error('Unauthorized: Not the customer for this booking');
      }

      // Validate status transition
      validateStatusChange(booking.status, newStatus, isPartner);

      await updateDoc(bookingRef, {
        status: newStatus,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw error;
    }
  }
}

export const bookingService = new BookingService();