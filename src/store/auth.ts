import { create } from 'zustand';
import { User } from '../types/models';
import { authService } from '../services/auth';
import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  avatar: z.string().optional(),
});

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: authService.getUser(),
  isAuthenticated: authService.isAuthenticated(),
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(email, password);
      userSchema.parse(response.user);
      set({ user: response.user, isAuthenticated: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      set({ error: message });
      throw new Error(message);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await authService.logout();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Logout failed';
      set({ error: message });
      throw new Error(message);
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(userData.email || '', userData.password);
      userSchema.parse(response.user);
      set({ user: response.user, isAuthenticated: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      set({ error: message });
      throw new Error(message);
    } finally {
      set({ isLoading: false });
    }
  },
}));