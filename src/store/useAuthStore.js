import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isAuthenticated: false,

            setUser: (user) => set({ user, isAuthenticated: !!user }),
            setToken: (token) => {
                set({ token });
                if (token) localStorage.setItem('token', token);
                else localStorage.removeItem('token');
            },
            login: (user, token) => {
                set({ user, token, isAuthenticated: true });
                localStorage.setItem('token', token);
            },
            logout: () => {
                set({ user: null, token: null, isAuthenticated: false });
                localStorage.removeItem('token');
            },
            updateUser: (data) =>
                set((state) => ({ user: { ...state.user, ...data } })),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ user: state.user, token: state.token }),
        }
    )
);

export default useAuthStore;
