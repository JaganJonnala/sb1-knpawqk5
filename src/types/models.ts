export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  avatar: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

export interface Booking {
  id: string;
  userId: string;
  providerId: string;
  serviceId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
}