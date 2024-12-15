import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ServiceData, ServiceWithPartner } from './types';
import { SERVICES_COLLECTION, PARTNERS_COLLECTION } from './constants';

export async function fetchServicesByCategory(categoryId: string): Promise<ServiceWithPartner[]> {
  try {
    const q = query(
      collection(db, SERVICES_COLLECTION),
      where('category', '==', categoryId),
      where('status', '==', 'active')
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

export async function fetchServicesByPartnerId(partnerId: string): Promise<ServiceData[]> {
  try {
    const q = query(
      collection(db, SERVICES_COLLECTION),
      where('partnerId', '==', partnerId),
      where('status', '==', 'active')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ServiceData[];
  } catch (error) {
    console.error('Error fetching partner services:', error);
    throw new Error('Failed to fetch partner services');
  }
}

export async function fetchServiceById(serviceId: string): Promise<ServiceData | null> {
  try {
    const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
    const serviceSnap = await getDoc(serviceRef);
    
    if (!serviceSnap.exists()) {
      return null;
    }

    return {
      id: serviceSnap.id,
      ...serviceSnap.data()
    } as ServiceData;
  } catch (error) {
    console.error('Error fetching service:', error);
    throw new Error('Failed to fetch service');
  }
}