import { useParams, Link } from 'react-router-dom';
import {
	AddToCart,
	ShopItems,
	Features,
	InTheBox,
	ImageGallery,
	Recommended,
	Announcement,
} from '../components';
import data from '../data.json';
import useStore from '../store/useStore';
import { useMemo, useState } from 'react';

const ProductDetail = () => {
	const { category, productId } = useParams();
	const increment = useStore((state) => state.increment);
	const decrement = useStore((state) => state.decrement);
	const product = data.find(item => item.category === category && item.id === parseInt(productId!));
	const [totalPriceState, setTotalPriceState] = useState<number>(product!.price)
	const [productQuantityLocal, setProductQuantityLocal] = useState<number>(1)

	if (!product) {
		return <div>Product not found</div>;
	}

	const basePrice = Number(product.price);

	const incrementing = () => {
		increment(basePrice)
		setTotalPriceState(productQuantityLocal * basePrice);
		setProductQuantityLocal((prev) => (prev + 1))
	}

	const decrementing = () => {
		decrement(basePrice)
		setTotalPriceState(productQuantityLocal * basePrice)
		if (productQuantityLocal >= 2) {
			setProductQuantityLocal((prev) => (prev - 1))
		}
	}

	// Resets productQuantity and price in the page
	const resetDetail = () => {
		setProductQuantityLocal(1)
		setTotalPriceState(basePrice)
		console.log(totalPriceState)
	}

	const priceByProductQuantity = useMemo(() => basePrice * productQuantityLocal, [basePrice, productQuantityLocal]);

	return (
		<>
			<div className='px-[1.5rem] lt:px-[2.5rem] max-w-[1110px] mx-auto 1110:px-0'>
				<div className='mt-4 mb-[1.5rem]'>
					<Link to={`/${category}`} className='text-second-black opacity-50 text-[.935rem] leading-[25px]'>
						Go Back
					</Link>
				</div>
				<div className='md:flex md:gap-[70px] lg:gap-[90px] md:items-center '>
					<picture className="w-full max-w-[689px] flex justify-center md:flex-1">
						<source srcSet={product.image.desktop} media="(min-width: 1024px)" />
						<source srcSet={product.image.tabletDetail} media="(min-width: 768px)" />
						<img src={product.image.mobile} alt={product.name} className='w-full' />
					</picture>
					<div className='md:flex-1'>
						{product.new && (
							<h2 className='mt-8 md:mt-0 mb-[1.5rem] text-[.875rem] tracking-[10px] uppercase text-reddish-orange'>
								New Product
							</h2>
						)}
						<h3 className='font-bold text-[1.75rem] mb-[1.5rem] tracking-[1px] uppercase'>
							{product.name}
						</h3>
						<p className='max-w-[339px] text-[.935rem] leading-[25px] opacity-80 mb-[1.5rem] text-second-black'>
							{product.description}
						</p>
						<p className='flex gap-2 mb-8 text-[1.15rem] font-bold text-second-black tracking-[1.286px] uppercase'>
							<span>$</span>
							<span>{(priceByProductQuantity).toLocaleString()}</span>
						</p>
						<AddToCart
							productId={parseInt(productId!)}
							productQuantityLocal={productQuantityLocal}
							increment={incrementing}
							decrement={decrementing}
							productImage={product.cart.image}
							productName={product.name}
							productPrice={priceByProductQuantity}
							setTotalPriceState={() => setTotalPriceState(basePrice)}
							resetDetail={resetDetail}
						/>
					</div>
				</div>
				<div className='lg:flex lg:mt-[120px] lg:gap-[100px] lg:justify-between'>
					<Features productId={parseInt(productId!)} />
					<InTheBox productId={parseInt(productId!)} />
				</div>
				<ImageGallery productId={parseInt(productId!)} />
				<Recommended productId={parseInt(productId!)} />
			</div>
			<ShopItems padding="0" />
			<Announcement />
		</>
	);
};

export default ProductDetail;
