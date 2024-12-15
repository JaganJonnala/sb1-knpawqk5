import { User } from '../types/models';
import { MOCK_USERS } from '../constants/auth';
import { validateEmail, validatePassword } from '../utils/validation';

export const api = {
  auth: {
    login: async (email: string, password: string): Promise<User> => {
      // Validate input
      if (!validateEmail(email)) {
        throw new Error('Invalid email format');
      }

      if (!validatePassword(password)) {
        throw new Error('Invalid password format');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find user
      const user = MOCK_USERS.find(
        u => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Don't send password in response
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    },

    register: async (userData: Partial<User> & { password: string }): Promise<User> => {
      if (!userData.email || !userData.password) {
        throw new Error('Email and password are required');
      }

      // Validate input
      if (!validateEmail(userData.email)) {
        throw new Error('Invalid email format');
      }

      if (!validatePassword(userData.password)) {
        throw new Error('Invalid password format');
      }

      // Check if user already exists
      if (MOCK_USERS.some(u => u.email === userData.email)) {
        throw new Error('Email already registered');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create new user
      return {
        id: Math.random().toString(),
        email: userData.email,
        name: userData.name || '',
        phone: userData.phone || '',
      };
    },
  },
};