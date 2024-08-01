import { create } from 'zustand'
import { CartState } from '../types/types'

const useStore = create<CartState>((set) => ({
    cartItems: [],
    productQuantity: 1,
    totalPrice: 0,
    addToCart: (item) => set((state) => {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
        const updatedCartItems = existingItem
            ? state.cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity! + item.quantity! }
                    : cartItem
            )
            : [...state.cartItems, item];
        return {
            cartItems: updatedCartItems,
            totalPrice: item.price,
        };
    }),
    removeItemById: (id: number) => set((state) => ({
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    })),
    clearCart: () => set({ cartItems: [] }),
    increment: (basePrice: number) => set((state) => {
        const newQuantity = state.productQuantity + 1;
        console.log(newQuantity)
        return { productQuantity: newQuantity, totalPrice: newQuantity * basePrice };
    }),
    decrement: (basePrice: number) => set((state) => {
        const newQuantity = state.productQuantity > 1 ? state.productQuantity - 1 : 1;
        return { productQuantity: newQuantity, totalPrice: newQuantity * basePrice };
    }),
    setTotalPrice: (basePrice: number) => set((state) => ({ totalPrice: state.productQuantity * basePrice })),
    resetProductQuantity: () => set({ productQuantity: 1 }),
}));

export default useStore;



