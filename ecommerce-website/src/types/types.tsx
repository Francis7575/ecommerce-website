export type ProductItem = {
    id: number
    mobile: string
    tablet: string
    desktop: string
    name: string
    paragraph: string
    link: string
    to: string
    new?: string
}

export type Product = {
    id: number
    name: string
    price: number
    quantity?: number
    cart?: {
        image: string
    }
}

export type CartState = {
    cartItems: Product[]
    productQuantity: number
    totalPrice: number;
    addToCart: (item: Product) => void
    removeItemById: (item: number) => void
    clearCart: () => void
    increment: (basePrice: number) => void
    decrement: (basePrice: number) => void
    setTotalPrice: (basePrice: number) => void;
    resetProductQuantity: () => void
}

export type AddToCartProps = {
    productQuantity: number
    increment: () => void
    decrement: () => void
    productId: number
    productImage: string 
    productName: string  
    productPrice: number 
}

export type NewProductProps = {
    name: string
    new?: string
    to: string
};

export type ViewProductProps = {
    firstTo: string
    secondTo: string
    thirdTo: string
}