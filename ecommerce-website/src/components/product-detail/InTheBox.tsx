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
		<div className='mt-[88px]'>
			<div>
				<h2 className='uppercase leading-[36px] tracking-[.857px] text-[1.5rem] font-bold'>
					in the box
				</h2>
				<ul className='mt-[24px]'>
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