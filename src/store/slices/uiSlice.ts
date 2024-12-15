import { StateCreator } from 'zustand';

export interface UISlice {
  isLoading: boolean;
  error: string | null;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  isLoading: false,
  error: null,

  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
});