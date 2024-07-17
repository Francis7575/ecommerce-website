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
		<div className='mt-[88px]'>
			<h2 className='text-[1.5rem] tracking-[0.857px] font-bold uppercase mb-[1.5rem]'>
				Features
			</h2>
			<div className='text-[.935rem] leading-[25px] opacity-70 text-second-black'>
				<p className='mb-[1.4rem]'>{product.features.first}</p>
				<p>{product.features.second}</p>
			</div>
		</div>
	);
}

export default Features;
