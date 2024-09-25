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
	totalItems: number;
	totalPrice: number;
	addToCart: (item: Product) => { itemAdded: boolean; itemUpdated: boolean };
	removeItemById: (item: number) => void
	clearCart: () => void
  increment: (id: number) => void;
  decrement: (id: number) => void;
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
  path?: string;
  element: JSX.Element;
  children?: IRouterType[];
}