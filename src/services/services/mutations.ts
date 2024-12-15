import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { CreateServiceData, ServiceData, UpdateServiceData } from './types';
import { SERVICES_COLLECTION, SERVICE_STATUS } from './constants';

export async function createService(data: CreateServiceData): Promise<ServiceData> {
  try {
    const service = {
      ...data,
      status: SERVICE_STATUS.ACTIVE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, SERVICES_COLLECTION), service);
    return { id: docRef.id, ...service };
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
}

export async function updateService(serviceId: string, updates: UpdateServiceData) {
  try {
    const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
    await updateDoc(serviceRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
}

export async function deleteService(serviceId: string) {
  try {
    const serviceRef = doc(db, SERVICES_COLLECTION, serviceId);
    await updateDoc(serviceRef, {
      status: SERVICE_STATUS.INACTIVE,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
}