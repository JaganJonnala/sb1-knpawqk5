import { ServiceProvider } from '../types/models';

export const mockServiceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Jane Smith',
    categoryId: 'beauty',
    description: 'Professional makeup artist with 5 years of experience',
    rating: 4.8,
    reviews: 124,
    price: 50,
    avatar: 'https://i.pravatar.cc/150?img=1',
    services: [
      {
        id: '1',
        name: 'Basic Makeup',
        description: 'Natural looking makeup for everyday wear',
        price: 50,
        duration: 60,
      },
      {
        id: '2',
        name: 'Bridal Makeup',
        description: 'Complete bridal makeup package',
        price: 150,
        duration: 120,
      },
    ],
  },
  {
    id: '2',
    name: 'John Doe',
    categoryId: 'home',
    description: 'Expert plumber with 10 years of experience',
    rating: 4.9,
    reviews: 256,
    price: 80,
    avatar: 'https://i.pravatar.cc/150?img=2',
    services: [
      {
        id: '3',
        name: 'Basic Plumbing',
        description: 'Fix common plumbing issues',
        price: 80,
        duration: 60,
      },
      {
        id: '4',
        name: 'Complete Inspection',
        description: 'Thorough inspection of plumbing system',
        price: 120,
        duration: 90,
      },
    ],
  },
];