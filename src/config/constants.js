export const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';

export const STORAGE_KEYS = {
    TOKEN: 'token',
    USER: 'user',
    THEME: 'theme',
    LANG: 'i18nextLng',
};

export const ROUTES = {
    HOME: '/',
    PRODUCTS: '/products',
    PRODUCT_DETAIL: '/products/:id',
    CART: '/cart',
    CHECKOUT: '/checkout',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    PROFILE: '/profile',
    ADMIN: {
        DASHBOARD: '/admin/dashboard',
        PRODUCTS: '/admin/products',
        ORDERS: '/admin/orders',
        USERS: '/admin/users',
    },
};
