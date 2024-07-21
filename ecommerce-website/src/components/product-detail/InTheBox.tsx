import data from '../../data.json';

type InTheBoxProps = {
	productId: number;
}

const InTheBox = ({ productId }: InTheBoxProps) => {
	const product = data.find(item => item.id === (productId));

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className='mt-[88px] lg:mt-0'>
			<div className='md:flex lg:flex-col'>
				<h2 className='uppercase md:w-full md:max-w-[339px] lg:mb-[2rem] leading-[36px] tracking-[.857px] text-[1.5rem] lg:text-[2rem] font-bold'>
					in the box
				</h2>
				<ul className='mt-[24px] md:mt-0 md:flex md:flex-col md:gap-[8px]'>
					{product.includes.map((includeItem, index) => (
						<li key={index} className='flex gap-[21px] text-[.935rem]'>
							<span className='font-bold text-reddish-orange'>{includeItem.quantity}x </span>
							<span className='opacity-70'>{includeItem.item}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default InTheBox