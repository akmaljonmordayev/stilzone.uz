import axiosInstance from '../config/axios';

export const authService = {
    login: (credentials) => axiosInstance.post('/auth/login', credentials),

    register: (data) => axiosInstance.post('/auth/register', data),

    logout: () => axiosInstance.post('/auth/logout'),

    refreshToken: () => axiosInstance.post('/auth/refresh'),

    getProfile: () => axiosInstance.get('/auth/me'),

    updateProfile: (data) => axiosInstance.put('/auth/me', data),

    changePassword: (data) => axiosInstance.put('/auth/change-password', data),
};
