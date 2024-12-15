import { StateCreator } from 'zustand';
import { User } from '../../types/models';
import { firebaseAuth } from '../../services/firebase/auth';
import { firestoreService } from '../../services/firebase/firestore';
import { partnerService } from '../../services/partner/service';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: { email: string; password: string; name: string; phone: string }) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthState> = (set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const firebaseUser = await firebaseAuth.login(email, password);
      const userData = await firestoreService.get<User>('users', firebaseUser.uid);
      debugger;
      if (!userData) throw new Error('User data not found');

      // Load partner profile if exists
      const partnerProfile = await partnerService.getProfileByUserId(userData.id);
      
      set({ 
        user: userData, 
        isAuthenticated: true,
        partnerProfile // This will be handled by the partner slice
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await firebaseAuth.logout();
      set({ 
        user: null, 
        isAuthenticated: false,
        partnerProfile: null // Clear partner profile on logout
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Logout failed';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const firebaseUser = await firebaseAuth.register(userData.email, userData.password);
      
      const user: User = {
        id: firebaseUser.uid,
        email: userData.email,
        name: userData.name,
        phone: userData.phone,
      };

      debugger;
      await firestoreService.createWithFbUID('users', user);
      debugger;
      set({ user, isAuthenticated: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const { user } = get();
      if (!user) throw new Error('User not authenticated');

      await firestoreService.update('users', user.id, {
        ...data,
        updatedAt: new Date().toISOString()
      });

      set(state => ({
        user: state.user ? { ...state.user, ...data } : null
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update profile';
      set({ error: message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
});