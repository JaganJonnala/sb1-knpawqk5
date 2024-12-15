import { StateCreator } from 'zustand';
import { ServiceData, ServiceWithPartner } from '../../services/services/types';
import { servicesService } from '../../services/services/service';

export interface ServicesState {
  services: ServiceWithPartner[];
  partnerServices: ServiceData[];
  isLoading: boolean;
  error: string | null;
  loadServicesByCategory: (categoryId: string) => Promise<void>;
  loadServicesByPartnerId: (partnerId: string) => Promise<void>;
  addService: (partnerId: string, data: Omit<ServiceData, 'id' | 'partnerId' | 'status' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateService: (serviceId: string, data: Partial<ServiceData>) => Promise<void>;
  deleteService: (serviceId: string) => Promise<void>;
}

export const createServicesSlice: StateCreator<ServicesState> = (set, get) => ({
  services: [],
  partnerServices: [],
  isLoading: false,
  error: null,

  loadServicesByCategory: async (categoryId) => {
    if (get().isLoading) return;
    set({ isLoading: true, error: null });
    try {
      const services = await servicesService.getServicesByCategory(categoryId);
      set({ services });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load services';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  loadServicesByPartnerId: async (partnerId) => {
    set({ isLoading: true, error: null });
    try {
      const services = await servicesService.getServicesByPartnerId(partnerId);
      set({ partnerServices: services });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load partner services';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  addService: async (partnerId, data) => {
    set({ isLoading: true, error: null });
    try {
      const service = await servicesService.addService(partnerId, data);
      set(state => ({
        partnerServices: [...state.partnerServices, service]
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to add service';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  updateService: async (serviceId, data) => {
    set({ isLoading: true, error: null });
    try {
      await servicesService.updateService(serviceId, data);
      set(state => ({
        partnerServices: state.partnerServices.map(service =>
          service.id === serviceId ? { ...service, ...data } : service
        )
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update service';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  deleteService: async (serviceId) => {
    set({ isLoading: true, error: null });
    try {
      await servicesService.deleteService(serviceId);
      set(state => ({
        partnerServices: state.partnerServices.filter(service => service.id !== serviceId)
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete service';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  }
});