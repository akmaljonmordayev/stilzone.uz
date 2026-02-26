import { useQuery } from '@tanstack/react-query';
import { orderService } from '../services/orderService';

export const useOrders = (params) => {
    return useQuery({
        queryKey: ['orders', params],
        queryFn: () => orderService.getAll(params).then((r) => r.data),
    });
};

export const useOrder = (id) => {
    return useQuery({
        queryKey: ['order', id],
        queryFn: () => orderService.getById(id).then((r) => r.data),
        enabled: !!id,
    });
};

export const useMyOrders = (params) => {
    return useQuery({
        queryKey: ['my-orders', params],
        queryFn: () => orderService.getMyOrders(params).then((r) => r.data),
    });
};
