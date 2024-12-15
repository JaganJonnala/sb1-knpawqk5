export interface PartnerProfile {
  id: string;
  userId: string;
  businessName: string;
  description: string;
  services: PartnerService[];
  category: string;
  address: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PartnerService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
}