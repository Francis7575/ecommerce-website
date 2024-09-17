import { ReactElement } from 'react';

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
	productQuantity: number
	image: string
}

export type CartState = {
	cartItems: Product[]
	productQuantity: number
	totalPrice: number;
	addToCart: (item: Product) => void
	removeItemById: (item: number) => void
	clearCart: () => void
	increment: (totalPriceState: number) => void
	decrement: (totalPriceState: number) => void
	setTotalPrice: (basePrice: number) => void;
}

export type AddToCartProps = {
	productQuantityLocal: number
	increment: () => void
	decrement: () => void
	productId: number
	productImage: string
	productName: string
	productPrice: number
	setTotalPriceState: () => void
	resetDetail: () => void
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

export type FormData = {
	name: string
	email: string
	phoneNumber: string
	address: string,
	zipcode: string,
	city: string,
	country: string,
	paymentDetails: "eMoney" | "cashDelivery" | null
	eMoneyNumber: string,
	eMoneyPin: string,
}

export type IRouterType = {
	title: string;
	path: string;
	element: ReactElement;
	children?: IRouterType[];
	layout?: boolean
}