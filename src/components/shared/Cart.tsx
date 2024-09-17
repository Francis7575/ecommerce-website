import { useEffect, useRef, useState } from 'react'
import useStore from "../../store/useStore"
import { Link, useParams } from 'react-router-dom'
import EmptyCartImage from "/assets/cart/cart-empty.png"

const Cart = () => {
	const [isCartOpened, setIsCartOpened] = useState<boolean>(false);
	const cartItems = useStore((state) => state.cartItems);
	const productQuantity = useStore((state) => state.productQuantity);
	const totalPrice = useStore((state) => state.totalPrice);
	const increment = useStore((state) => state.increment);
	const decrement = useStore((state) => state.decrement);
	const cartRef = useRef<HTMLDivElement>(null);
	const { category, productId } = useParams();

	const handleToggleCart = () => {
		setIsCartOpened(!isCartOpened)
	}

	const LimitCharacters = (name: string) => {
		return name.length > 8 ? `${name.slice(0, 12)}` : name;
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
				const cartButton = document.querySelector('.cart');
				if (cartButton && cartButton.contains(event.target as Node)) {
					return; // If the click is on the cart button, do nothing
				}
				setIsCartOpened(false);
			}
		};

		if (isCartOpened) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isCartOpened])

	return (
		<div className='pr-[1.75rem] md:pr-[40px] relative lg:pr-[3rem] 1110:pr-0'>
			<button onClick={handleToggleCart}>
				<svg width="23" height="20" className='cart' viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="Combined Shape 2" >
						<path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M7.41142 13.1946H7.41037C7.03959 13.1955 6.73829 13.491 6.73829 13.8542C6.73829 14.2179 7.04064 14.5139 7.41212 14.5139H19.6309C20.0031 14.5139 20.3047 14.8092 20.3047 15.1736C20.3047 15.538 20.0031 15.8333 19.6309 15.8333H18.4821H8.625H7.41212C6.2975 15.8333 5.39063 14.9455 5.39063 13.8542C5.39063 13.0421 5.89302 12.343 6.60914 12.0382L4.17634 1.31944H0.673829C0.301644 1.31944 0 1.02412 0 0.659722C0 0.295329 0.301644 0 0.673829 0H4.7168C5.03266 0 5.30605 0.214753 5.37467 0.516611L5.85635 2.63889H22.3262C22.5377 2.63889 22.7368 2.73613 22.8642 2.9014C22.9914 3.06668 23.0322 3.28074 22.9741 3.47986L20.2788 12.716C20.1961 12.9991 19.9317 13.1944 19.6309 13.1944H7.41405L7.41142 13.1946ZM8.625 15.8333C9.75732 15.8333 10.6786 16.7679 10.6786 17.9167C10.6786 19.0654 9.75732 20 8.625 20C7.49268 20 6.57143 19.0654 6.57143 17.9167C6.57143 16.7679 7.49268 15.8333 8.625 15.8333ZM18.4821 15.8333C19.6145 15.8333 20.5357 16.7679 20.5357 17.9167C20.5357 19.0654 19.6145 20 18.4821 20C17.3498 20 16.4286 19.0654 16.4286 17.9167C16.4286 16.7679 17.3498 15.8333 18.4821 15.8333ZM19.1225 11.875L21.4329 3.95833H6.15571L7.95259 11.875H19.1225ZM9.30952 17.9167C9.30952 17.5338 9.00238 17.2222 8.625 17.2222C8.24762 17.2222 7.94048 17.5338 7.94048 17.9167C7.94048 18.2995 8.24762 18.6111 8.625 18.6111C9.00238 18.6111 9.30952 18.2995 9.30952 17.9167ZM18.4821 17.2222C18.8595 17.2222 19.1667 17.5338 19.1667 17.9167C19.1667 18.2995 18.8595 18.6111 18.4821 18.6111C18.1048 18.6111 17.7976 18.2995 17.7976 17.9167C17.7976 17.5338 18.1048 17.2222 18.4821 17.2222Z" fill="white" />
					</g>
				</svg>
			</button>
			<section ref={cartRef}
				className={`bg-white cart-container rounded-[8px] py-[2rem] z-50 px-[1.75rem] lg:px-[2rem]
					${isCartOpened ? '' : 'hidden'}`}>
				{cartItems.length === 0 && (
					<div>
						<img src={EmptyCartImage} alt="Your Cart is currently empty" />
					</div>
				)}
				{cartItems.length > 0 && (
					<div className='flex justify-between items-center mb-6'>
						<p className='font-bold'>
							<span>CART</span>
							<span>({productQuantity})</span>
						</p>
						<button className='underline opacity-50'
							onClick={() => useStore.getState().clearCart()}>
							Remove All
						</button>
					</div>
				)}
				<ul>
					{cartItems.map((item) => (
						<li key={item.id} className='mb-6 flex relative'>
							<button className='self-start absolute inset-0'
								onClick={() => useStore.getState().removeItemById(item.id)}>
								<svg className="w-[16px]" fill="#FA5252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,7v10	c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V7c0-2.209,1.791-4,4-4h10C19.209,3,21,4.791,21,7z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z" /></svg>
							</button>
							<div className='flex items-center flex-1'>
								<div className='flex items-center gap-4'>
									{item && (
										<img
											className='max-w-[64px]'
											src={item.image}
											alt={item.name}
										/>
									)}
									<div className='mr-[20px]'>
										<p className='text-[.935rem] font-bold leading-[25px]'>
											{LimitCharacters(item.name)}
										</p>
										<p className='text-[.875rem] opacity-50 font-bold flex gap-1 items-center'>
											<span>$</span>
											<span>{totalPrice.toLocaleString()}</span>
										</p>
									</div>
								</div>
								<div className='bg-lightgray font-bold w-full max-w-[96px] px-[11px] py-[7px] flex justify-between'>
									<button onClick={() => decrement(item.price)}
										className='opacity-50'>-</button>
									<span>{productQuantity}</span>
									<button onClick={() => increment(item.price)}
										className='opacity-50'>+</button>
								</div>
							</div>
						</li>
					))}
					{cartItems.length > 0 && (
						<div className='mt-6 '>
							<div className='flex justify-between'>
								<p className='uppercase opacity-70 text-[.93rem]'>
									Total
								</p>
								<p className='font-bold'>${totalPrice.toLocaleString()}</p>
							</div>
							<Link to={`/${category}/${productId}/checkout`}
								className='mt-4 inline-block text-center px-4 py-2 bg-reddish-orange w-full text-white rounded hover:bg-reddish-hover'>
								Checkout
							</Link>
						</div>
					)}

				</ul>
			</section>
		</div>
	)
}

export default Cart