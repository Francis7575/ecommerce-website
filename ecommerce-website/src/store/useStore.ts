import { create } from 'zustand'
import { CartState } from '../types/types';

const useStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeItemById: (item) => set((state) => ({
        cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    })),
    clearCart: () => set({ cart: [] }),
}));

export default useStore;