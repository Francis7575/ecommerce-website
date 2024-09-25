import data from '../../data.json';

type FeaturesProps = {
	productId: number;
}

const Features = ({ productId }: FeaturesProps) => {
	const product = data.find(item => item.id === (productId));

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className='mt-[88px] lg:mt-0'>
			<h2 className='text-[1.5rem] lg:text-[2rem] leading-[36px] tracking-[0.857px] font-bold uppercase mb-[1.5rem] lg:mb-[2rem]'>
				Features
			</h2>
			<div className='text-[.935rem] leading-[25px] opacity-70 text-second-black'>
				<p className='mb-[1.4rem] lg:max-w-[635px]'>{product.features.first}</p>
				<p className='lg:max-w-[635px]'>{product.features.second}</p>
			</div>
		</div>
	);
}

export default Features;
