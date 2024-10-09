import { create } from "zustand";
import { CartState, Product } from "../types/types";

const useStore = create<CartState>((set) => {
  // Initialize state from localStorage
  const initialCartItems = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );

  const updateLocalStorage = (cartItems: Product[]) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return {
    cartItems: initialCartItems,
    productQuantity: 1,
    totalItems: initialCartItems.reduce(
      (total: number, item: { productQuantity: number }) =>
        total + item.productQuantity,
      0
    ),
    totalPrice: initialCartItems.reduce(
      (total: number, item: { basePrice: number; productQuantity: number }) =>
        total + item.basePrice * item.productQuantity,
      0
    ),
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
              const newItemPrice = newQuantity * item.basePrice;
              return {
                ...cartItem,
                productQuantity: newQuantity,
                itemPrice: newItemPrice, // Update the individual item price
              };
            }
            return cartItem;
          });

          updateLocalStorage(updatedCartItems);

          return {
            cartItems: updatedCartItems,
            totalItems: updatedCartItems.reduce(
              (total, cartItem) => total + cartItem.productQuantity!,
              0
            ),
            totalPrice: updatedCartItems.reduce(
              (total, cartItem) =>
                total + cartItem.basePrice * cartItem.productQuantity!,
              0
            ),
          };
        } else if (item.productQuantity > 0) {
          // Add new item to the cart
          itemAdded = true; // Mark as newly added
          const newItem = {
            ...item,
            itemPrice: item.productQuantity! * item.basePrice, // Calculate the price for the new item
          };
          const updatedCartItems = [...state.cartItems, newItem];

          updateLocalStorage(updatedCartItems);
          return {
            cartItems: updatedCartItems,
            totalItems: updatedCartItems.reduce(
              (total, cartItem) => total + cartItem.productQuantity!,
              0
            ),
            totalPrice: updatedCartItems.reduce(
              (total, cartItem) =>
                total + cartItem.basePrice * cartItem.productQuantity!,
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
        updateLocalStorage(updatedCartItems);
        return {
          cartItems: updatedCartItems,
          productQuantity: 1, // Reset product quantity
          itemPrice: updatedCartItems.reduce(
            (total, item) => total + item.basePrice * item.quantity!,
            0
          ),
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ), // Recalculate total items
          totalPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.basePrice * cartItem.productQuantity!,
            0
          ),
        };
      }),
    clearCart: () => {
      localStorage.removeItem("cartItems");
      set({ cartItems: [], productQuantity: 1, totalPrice: 0 });
    },
    increment: (id: number) =>
      set((state) => {
        const updatedCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === id) {
            const newQuantity = cartItem.productQuantity! + 1;
            const newItemPrice = newQuantity * cartItem.basePrice; // Update itemPrice based on new quantity
            return {
              ...cartItem,
              productQuantity: newQuantity,
              itemPrice: newItemPrice,
            };
          }
          return cartItem;
        });

        updateLocalStorage(updatedCartItems);
        return {
          cartItems: updatedCartItems,
          itemPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.basePrice * cartItem.productQuantity!,
            0
          ),
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ),
          totalPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.basePrice * cartItem.productQuantity!,
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
              const newItemPrice = newQuantity * cartItem.basePrice; // Update itemPrice based on new quantity
            return {
              ...cartItem,
              productQuantity: newQuantity,
              itemPrice: newItemPrice,
            };
          }
          return cartItem;
        });

        updateLocalStorage(updatedCartItems);
        return {
          cartItems: updatedCartItems,
          itemPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.basePrice * cartItem.productQuantity!,
            0
          ),
          totalItems: updatedCartItems.reduce(
            (total, cartItem) => total + cartItem.productQuantity!,
            0
          ),
          totalPrice: updatedCartItems.reduce(
            (total, cartItem) =>
              total + cartItem.basePrice * cartItem.productQuantity!,
            0
          ),
        };
      }),
  };
});

export default useStore;
