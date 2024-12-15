import { PartnerProfile } from '../../types/partner';
import { ServiceStatus } from './constants';

export interface ServiceData {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  partnerId: string;
  status: ServiceStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceWithPartner extends ServiceData {
  partner: PartnerProfile;
}

export interface CreateServiceData {
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  partnerId: string;
}

export interface UpdateServiceData extends Partial<Omit<ServiceData, 'id' | 'createdAt' | 'updatedAt'>> {}