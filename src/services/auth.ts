import { MOCK_USERS } from '../constants/auth';
import { User } from '../types/models';
import { validateEmail, validatePassword } from '../utils/validation';

class AuthService {
  async login(email: string, password: string): Promise<User> {
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
  }

  async register(userData: { 
    email: string; 
    password: string; 
    name: string; 
    phone: string; 
  }): Promise<User> {
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

    // In a real app, we would create a new user in the database
    return {
      id: Math.random().toString(),
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
    };
  }
}