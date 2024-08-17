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
    removeItemById: (id: number) => set((state) => {
        const updatedCartItems = state.cartItems.filter((cartItem) => cartItem.id !== id);
        return {
            cartItems: updatedCartItems,
            productQuantity: 1,  // Reset product quantity
            totalPrice: updatedCartItems.reduce((total, item) => total + item.price * item.quantity!, 0), //  is recalculated based on the remaining items in the cart.
        };
    }),
    clearCart: () => set({cartItems: [], productQuantity: 1, totalPrice: 0}),
    increment: (basePrice: number) => set((state) => {
        const newQuantity = state.productQuantity + 1;
        return { productQuantity: newQuantity, totalPrice: newQuantity * basePrice };
    }),
    decrement: (basePrice: number) => set((state) => {
        const newQuantity = state.productQuantity > 1 ? state.productQuantity - 1 : 1;
        return { productQuantity: newQuantity, totalPrice: newQuantity * basePrice };
    }),
    setTotalPrice: (basePrice: number) => set((state) => ({ totalPrice: state.productQuantity * basePrice })),
}));

export default useStore;



