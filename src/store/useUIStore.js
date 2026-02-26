import { create } from 'zustand';

const useUIStore = create((set) => ({
    isMenuOpen: false,
    isSearchOpen: false,
    language: localStorage.getItem('i18nextLng') || 'uz',

    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isMenuOpen: false }),

    toggleSearch: () =>
        set((state) => ({ isSearchOpen: !state.isSearchOpen })),
    closeSearch: () => set({ isSearchOpen: false }),

    setLanguage: (lang) => set({ language: lang }),
}));

export default useUIStore;
