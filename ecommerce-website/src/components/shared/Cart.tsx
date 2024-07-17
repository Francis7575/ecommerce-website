import CartIcon from '/assets/cart.svg'
import { useState } from 'react'
import useStore from "../../store/useStore"

const Cart = () => {
	const [isCartOpened, setIsCartOpened] = useState<boolean>(false);
	const cartItems = useStore((state) => state.cartItems);
	const productQuantity = useStore((state) => state.productQuantity);
	const totalPrice = useStore((state) => state.totalPrice);
	const increment = useStore((state) => state.increment);
	const decrement = useStore((state) => state.decrement);

	const handleToggleCart = () => {
		setIsCartOpened(!isCartOpened)
	}

	const LimitCharacters = (name: string) => {
		return name.length > 8 ? `${name.slice(0, 12)}` : name;
	};

	return (
		<div className='pr-[1.75rem] md:pr-[40px] relative lg:pr-[3rem]'>
			<button onClick={handleToggleCart}>
				<img src={CartIcon} alt="Cart" />
			</button>
			<div className={`bg-white cart-container rounded-[8px] py-[2rem] z-50 px-[1.75rem]
				${isCartOpened ? '' : 'hidden'}`}>
				<div className='flex justify-between items-center'>
					<p className='font-bold'>
						<span>CART</span>
						<span>({productQuantity})</span>
					</p>
					<button className='underline opacity-50'
						onClick={() => useStore.getState().clearCart()}>
						Remove All
					</button>
				</div>
				<ul className='mt-8'>
					{cartItems.map((item) => (
						<li key={item.id}>
							<div className='flex items-center'>
								<div className='flex items-center gap-4'>
									{item.cart && (
										<img
											className='max-w-[64px]'
											src={item.cart.image}
											alt={item.name}
										/>
									)}
									<div className='mr-[20px]'>
										<p className='text-[.935rem] font-bold leading-[25px]'>
											{LimitCharacters(item.name)}
										</p>
										<p className='text-[.875rem] opacity-50 font-bold flex gap-1 items-center'>
											<span>$</span>
											<span>{item.price.toLocaleString()}</span>
										</p>
									</div>
								</div>
								<div className='bg-lightgray font-bold w-full max-w-[96px] px-[11px] py-[7px] flex justify-between'>
									<button onClick={() => decrement(item.price)}
										className='opacity-50'>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => increment(item.price)}
										className='opacity-50'>+</button>
								</div>
							</div>
							<div className='flex justify-center mt-4'>
								<button className='bg-red text-white py-2 px-4 rounded-[.25rem] text-[.935rem]'
									onClick={() => useStore.getState().removeItemById(item.id)}>
									Remove Items
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Cart