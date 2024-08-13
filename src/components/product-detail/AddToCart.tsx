import useStore from "../../store/useStore"
import { AddToCartProps } from "../../types/types"

const AddToCart = ({ increment, decrement, productId, productImage, productName,
	productPrice, setTotalPriceState, productQuantityLocal, resetDetail }: AddToCartProps) => {
	const addToCart = useStore((state) => state.addToCart);

	const handleAddToCart = () => {
		addToCart({
			id: productId,
			productQuantity: productQuantityLocal,
			image: productImage,
			name: productName,
			price: productPrice,
		});
		resetDetail()
		setTotalPriceState();
	};

	return (
		<div className='flex gap-4 items-center '>
			<div className='flex gap-[1.25rem] items-center bg-lightgray p-[15px] font-bold w-[128px] justify-center text-[.813rem] lg:text-[1rem]'>
				<button onClick={decrement}
					className='opacity-70 text-second-black hover:text-reddish-orange hover:opacity-100'>
					-
				</button>
				<span>{productQuantityLocal}</span>
				<button onClick={increment}
					className='opacity-70 text-second-black hover:text-reddish-orange hover:opacity-100'>
					+
				</button>
			</div>
			<button onClick={handleAddToCart}
				className='w-[160px] bg-reddish-orange hover:bg-reddish-hover text-white font-bold uppercase tracking-[1px] py-[15px] text-[.813rem]'>
				Add to cart
			</button>
		</div>
	)
}

export default AddToCart