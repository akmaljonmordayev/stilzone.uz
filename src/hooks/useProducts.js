import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';

export const useProducts = (params) => {
    return useQuery({
        queryKey: ['products', params],
        queryFn: () => productService.getAll(params).then((r) => r.data),
    });
};

export const useProduct = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => productService.getById(id).then((r) => r.data),
        enabled: !!id,
    });
};

export const useProductsByCategory = (categoryId, params) => {
    return useQuery({
        queryKey: ['products', 'category', categoryId, params],
        queryFn: () =>
            productService.getByCategory(categoryId, params).then((r) => r.data),
        enabled: !!categoryId,
    });
};
