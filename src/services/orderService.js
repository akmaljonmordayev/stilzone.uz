import axiosInstance from '../config/axios';

export const orderService = {
    getAll: (params) => axiosInstance.get('/orders', { params }),

    getById: (id) => axiosInstance.get(`/orders/${id}`),

    create: (data) => axiosInstance.post('/orders', data),

    updateStatus: (id, status) =>
        axiosInstance.patch(`/orders/${id}/status`, { status }),

    cancel: (id) => axiosInstance.patch(`/orders/${id}/cancel`),

    getMyOrders: (params) => axiosInstance.get('/orders/my', { params }),
};
