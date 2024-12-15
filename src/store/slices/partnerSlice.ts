import { StateCreator } from 'zustand';
import { PartnerProfile } from '../../types/partner';
import { partnerService } from '../../services/partner/service';
import { servicesService } from '../../services/services/service';
import { ServiceData } from '../../services/services/types';

export interface PartnerState {
  partnerProfile: PartnerProfile | null;
  services: ServiceData[];
  isLoading: boolean;
  error: string | null;
  createProfile: (data: Partial<PartnerProfile>) => Promise<void>;
  loadProfile: () => Promise<void>;
  loadPartnerServices: () => Promise<void>;
  addService: (data: Omit<ServiceData, 'id' | 'partnerId' | 'status' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateService: (serviceId: string, data: Partial<ServiceData>) => Promise<void>;
  deleteService: (serviceId: string) => Promise<void>;
}

export const createPartnerSlice: StateCreator<PartnerState> = (set, get) => ({
  partnerProfile: null,
  services: [],
  isLoading: false,
  error: null,

  createProfile: async (data) => {
    const { user } = get() as any;
    if (!user) throw new Error('User not authenticated');

    set({ isLoading: true, error: null });
    try {
      const profile = await partnerService.createProfile(user.id, data);
      set({ partnerProfile: profile });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create profile';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  loadProfile: async () => {
    const { user } = get() as any;
    if (!user) return;

    set({ isLoading: true, error: null });
    try {
      const profile = await partnerService.getProfileByUserId(user.id);
      set({ partnerProfile: profile });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load profile';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  loadPartnerServices: async () => {
    const { partnerProfile } = get();
    if (!partnerProfile) return;

    set({ isLoading: true, error: null });
    try {
      const services = await servicesService.getServicesByPartnerId(partnerProfile.id);
      set({ services });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load services';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  addService: async (data) => {
    const { partnerProfile } = get();
    if (!partnerProfile) throw new Error('Partner profile not found');

    set({ isLoading: true, error: null });
    try {
      await servicesService.addService(partnerProfile.id, data);
      await get().loadPartnerServices(); // Reload services after adding
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
      await get().loadPartnerServices(); // Reload services after updating
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
      await get().loadPartnerServices(); // Reload services after deleting
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete service';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  }
});