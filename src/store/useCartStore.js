import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            totalPrice: 0,

            addItem: (product, quantity = 1) => {
                const items = get().items;
                const existing = items.find((i) => i.id === product.id);
                let updatedItems;
                if (existing) {
                    updatedItems = items.map((i) =>
                        i.id === product.id
                            ? { ...i, quantity: i.quantity + quantity }
                            : i
                    );
                } else {
                    updatedItems = [...items, { ...product, quantity }];
                }
                set({
                    items: updatedItems,
                    totalItems: updatedItems.reduce((s, i) => s + i.quantity, 0),
                    totalPrice: updatedItems.reduce(
                        (s, i) => s + i.price * i.quantity,
                        0
                    ),
                });
            },

            removeItem: (id) => {
                const updatedItems = get().items.filter((i) => i.id !== id);
                set({
                    items: updatedItems,
                    totalItems: updatedItems.reduce((s, i) => s + i.quantity, 0),
                    totalPrice: updatedItems.reduce(
                        (s, i) => s + i.price * i.quantity,
                        0
                    ),
                });
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(id);
                    return;
                }
                const updatedItems = get().items.map((i) =>
                    i.id === id ? { ...i, quantity } : i
                );
                set({
                    items: updatedItems,
                    totalItems: updatedItems.reduce((s, i) => s + i.quantity, 0),
                    totalPrice: updatedItems.reduce(
                        (s, i) => s + i.price * i.quantity,
                        0
                    ),
                });
            },

            clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
        }),
        {
            name: 'cart-storage',
        }
    )
);

export default useCartStore;
