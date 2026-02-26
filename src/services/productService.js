import axiosInstance from '../config/axios';
import qs from 'qs';

export const productService = {
    getAll: (params) =>
        axiosInstance.get('/products', {
            params,
            paramsSerializer: (p) => qs.stringify(p, { arrayFormat: 'repeat' }),
        }),

    getById: (id) => axiosInstance.get(`/products/${id}`),

    create: (data) => axiosInstance.post('/products', data),

    update: (id, data) => axiosInstance.put(`/products/${id}`, data),

    delete: (id) => axiosInstance.delete(`/products/${id}`),

    getByCategory: (categoryId, params) =>
        axiosInstance.get(`/categories/${categoryId}/products`, { params }),
};
