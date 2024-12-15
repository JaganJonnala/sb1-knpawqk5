// Mock user credentials for testing
export const MOCK_USERS = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'Password123', // In a real app, this would be hashed
    name: 'John Doe',
    phone: '+1234567890',
  },
  {
    id: '2',
    email: 'admin@example.com',
    password: 'Admin123',
    name: 'Admin User',
    phone: '+1987654321',
  },
] as const;