import { create } from "zustand";
import { CartState } from "../types/types";

const useStore = create<CartState>((set) => ({
  cartItems: [],
  productQuantity: 1,
  totalItems: 0,
  totalPrice: 0,
  addToCart: (item) => {
    let itemAdded = false;
    let itemUpdated = false;

    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Update quantity and price if the item exists
        const updatedCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            itemUpdated = true; // Mark as updated
            const newQuantity =
              cartItem.productQuantity! + item.productQuantity!;
            const newItemPrice = newQuantity * item.price;
            return {
              ...cartItem,
              productQuantity: newQuantity,
              itemPrice: newItemPrice, // Update the individual item price
            };
          }
          return cartItem;
        });

        return {
          cartItems: updatedCartItems,
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ),
          totalPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.price * cartItem.productQuantity!,
            0
          ),
        };
      } else if (item.productQuantity > 0) {
        // Add new item to the cart
        itemAdded = true; // Mark as newly added
        const newItem = {
          ...item,
          itemPrice: item.productQuantity! * item.price, // Calculate the price for the new item
        };
        const updatedCartItems = [...state.cartItems, newItem];

        return {
          cartItems: updatedCartItems,
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ),
          totalPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.price * cartItem.productQuantity!,
            0
          ),
        };
      }
      return state;
    });
    return { itemAdded, itemUpdated };
  },

  removeItemById: (id: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      return {
        cartItems: updatedCartItems,
        productQuantity: 1, // Reset product quantity
        itemPrice: updatedCartItems.reduce(
          (total, item) => total + item.price * item.quantity!,
          0
        ),
        totalItems: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.productQuantity!,
          0
        ), // Recalculate total items
        totalPrice: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.price * cartItem.productQuantity!,
          0
        ),
      };
    }),
  clearCart: () => set({ cartItems: [], productQuantity: 1, totalPrice: 0  }),
  increment: (id: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          const newQuantity = cartItem.productQuantity! + 1;
          return {
            ...cartItem,
            productQuantity: newQuantity,
          };
        }
        return cartItem;
      });

      return {
        cartItems: updatedCartItems,
        itemPrice: updatedCartItems.reduce(
          (total, cartItem) =>
            total + cartItem.price * cartItem.productQuantity!,
          0
        ),
        totalItems: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.productQuantity!,
          0
        ),
        totalPrice: updatedCartItems.reduce(
          (total, cartItem) =>
            total + cartItem.price * cartItem.productQuantity!,
          0
        ),
      };
    }),
  decrement: (id: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          const newQuantity =
            cartItem.productQuantity! > 1 ? cartItem.productQuantity! - 1 : 1;
          return {
            ...cartItem,
            productQuantity: newQuantity,
          };
        }
        return cartItem;
      });

      return {
        cartItems: updatedCartItems,
        itemPrice: updatedCartItems.reduce(
          (total, cartItem) =>
            total + cartItem.price * cartItem.productQuantity!,
          0
        ),
        totalItems: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.productQuantity!,
          0
        ),
        totalPrice: updatedCartItems.reduce(
          (total, cartItem) =>
            total + cartItem.price * cartItem.productQuantity!,
          0
        ),
      };
    }),
}));

export default useStore;
