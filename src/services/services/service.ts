import { 
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ServiceData, ServiceWithPartner, CreateServiceData } from './types';
import { SERVICES_COLLECTION, PARTNERS_COLLECTION, SERVICE_STATUS } from './constants';

class ServicesService {
  async getServicesByCategory(categoryId: string): Promise<ServiceWithPartner[]> {
    try {
      const q = query(
        collection(db, SERVICES_COLLECTION),
        where('category', '==', categoryId),
        where('status', '==', SERVICE_STATUS.ACTIVE)
      );

      const snapshot = await getDocs(q);
      const services = await Promise.all(
        snapshot.docs.map(async (serviceDoc) => {
          const serviceData = { id: serviceDoc.id, ...serviceDoc.data() } as ServiceData;
          const partnerRef = doc(db, PARTNERS_COLLECTION, serviceData.partnerId);
          const partnerSnap = await getDoc(partnerRef);

          if (!partnerSnap.exists()) {
            throw new Error(`Partner not found for service ${serviceData.id}`);
          }

          return {
            ...serviceData,
            partner: {
              id: partnerSnap.id,
              ...partnerSnap.data()
            }
          };
        })
      );

      return services;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw new Error('Failed to fetch services');
    }
  }

  async getServicesByPartnerId(partnerId: string): Promise<ServiceWithPartner[]> {
    try {
      const q = query(
        collection(db, SERVICES_COLLECTION),
        where('partnerId', '==', partnerId),
        where('status', '==', SERVICE_STATUS.ACTIVE)
      );

      const snapshot = await getDocs(q);
      const partnerRef = doc(db, PARTNERS_COLLECTION, partnerId);
      const partnerSnap = await getDoc(partnerRef);

      if (!partnerSnap.exists()) {
        throw new Error('Partner not found');
      }

      const partner = {
        id: partnerSnap.id,
        ...partnerSnap.data()
      };

      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        partner
      })) as ServiceWithPartner[];
    } catch (error) {
      console.error('Error fetching partner services:', error);
      throw new Error('Failed to fetch partner services');
    }
  }

  async addService(partnerId: string, data: Omit<CreateServiceData, 'partnerId'>): Promise<ServiceData> {
    try {
      const service = {
        ...data,
        partnerId,
        status: SERVICE_STATUS.ACTIVE,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, SERVICES_COLLECTION), service);
      return { id: docRef.id, ...service };
    } catch (error) {
      console.error('Error creating service:', error);
      throw new Error('Failed to create service');
    }
  }

  async updateService(serviceId: string, updates: Partial<ServiceData>): Promise<void> {
    try {
      const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
      await updateDoc(serviceRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating service:', error);
      throw new Error('Failed to update service');
    }
  }

  async deleteService(serviceId: string): Promise<void> {
    try {
      const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
      await updateDoc(serviceRef, {
        status: SERVICE_STATUS.INACTIVE,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error deleting service:', error);
      throw new Error('Failed to delete service');
    }
  }
}

export const servicesService = new ServicesService();