import { create } from 'zustand';

interface UIStore {
  mobileMenuOpen: boolean;
  activeFilter: string;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setActiveFilter: (filter: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  mobileMenuOpen: false,
  activeFilter: 'all',

  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

  closeMobileMenu: () =>
    set({ mobileMenuOpen: false }),

  setActiveFilter: (filter: string) =>
    set({ activeFilter: filter }),
}));
