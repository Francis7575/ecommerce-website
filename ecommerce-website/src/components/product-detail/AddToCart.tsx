import useStore from "../../store/useStore"
import { AddToCartProps } from "../../types/types"

const AddToCart = ({ productQuantity, increment, decrement, productId, productImage, productName,
	productPrice, }: AddToCartProps) => {
	const addToCart = useStore((state) => state.addToCart);
	const resetProductQuantity = useStore((state) => state.resetProductQuantity);

	const handleAddToCart = () => {
		addToCart({
			id: productId,
			quantity: productQuantity,
			cart: { image: productImage },
			name: productName,
			price: productPrice,
		});
		resetProductQuantity();
	};

	return (
		<div className='flex gap-4 items-center'>
			<div className='flex gap-[1.25rem] items-center bg-lightgray p-[15px] font-bold w-[128px] justify-center text-[.813rem]'>
				<button onClick={decrement}
					className='opacity-70'>
					-
				</button>
				<span>{productQuantity}</span>
				<button onClick={increment}
					className='opacity-70'>
					+
				</button>
			</div>
			<button onClick={handleAddToCart}
				className='w-[160px] bg-reddish-orange text-white font-bold uppercase tracking-[1px] py-[15px] text-[.813rem]'>
				Add to cart
			</button>
		</div>
	)
}

export default AddToCart