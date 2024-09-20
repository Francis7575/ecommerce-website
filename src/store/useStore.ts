import { create } from "zustand";
import { CartState } from "../types/types";

const useStore = create<CartState>((set) => ({
  cartItems: [],
  productQuantity: 1,
  itemPrice: 0,
  totalItems: 0,
  addToCart: (item) => {
    let itemAdded = false;
    let itemUpdated = false;

    const updatedState = set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Update quantity and total price if the item exists
        const updatedCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            itemUpdated = true; // Mark as updated
            return {
              ...cartItem,
              productQuantity:
                cartItem.productQuantity! + item.productQuantity!,
            };
          }
          return cartItem;
        });

        return {
          cartItems: updatedCartItems,
          itemPrice: state.itemPrice + item.price * item.productQuantity!,
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ),
        };
      } else if (item.productQuantity > 0) {
        // Add new item to the cart
        itemAdded = true; // Mark as newly added
        const updatedCartItems = [...state.cartItems, item];

        return {
          cartItems: updatedCartItems,
          itemPrice: state.itemPrice + item.price * item.productQuantity!,
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ),
        };
      }

      // If neither case was true, return the original state without changes
      return {
        cartItems: state.cartItems,
        itemPrice: state.itemPrice,
        totalItems: state.totalItems,
      };
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
      };
    }),
  clearCart: () => set({ cartItems: [], productQuantity: 1, itemPrice: 0 }),
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
          (total, cartItem) => total + cartItem.price * cartItem.productQuantity!,
          0
        ),
        totalItems: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.productQuantity!,
          0
        ),
      };
    }),
   decrement: (id: number) =>
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          const newQuantity = cartItem.productQuantity! > 1 ? cartItem.productQuantity! - 1 : 1;
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
          (total, cartItem) => total + cartItem.price * cartItem.productQuantity!,
          0
        ),
        totalItems: updatedCartItems.reduce(
          (total, cartItem) => total + cartItem.productQuantity!,
          0
        ),
      };
    }),
  setTotalPrice: (basePrice: number) =>
    set((state) => ({ itemPrice: state.productQuantity * basePrice })),
}));

export default useStore;
