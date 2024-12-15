export const SERVICES_COLLECTION = 'services';
export const PARTNERS_COLLECTION = 'partners';

export const SERVICE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export type ServiceStatus = typeof SERVICE_STATUS[keyof typeof SERVICE_STATUS];