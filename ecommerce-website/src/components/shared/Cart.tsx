import CartIcon from '/assets/cart.svg'

const Cart = () => {
	return (
		<div className='pr-[1.75rem]'>
			<button>
				<img src={CartIcon} alt="Cart" />
			</button>
		</div>
	)
}

export default Cart