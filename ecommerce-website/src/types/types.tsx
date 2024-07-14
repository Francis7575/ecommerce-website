export type Product = {
    id: number;
    name: string;
    price: number;
}

export type CartState = {
    cart: Product[];
    addToCart: (item: Product) => void;
    removeItemById: (item: Product) => void;
    clearCart: () => void;
}