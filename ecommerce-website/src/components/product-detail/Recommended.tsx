import data from '../../data.json';
import { Link } from 'react-router-dom';

type Props = {
	productId: number;
};

const Recommended = ({ productId }: Props) => {
	const product = data.find(item => item.id === productId);

	if (!product) {
		console.error(`Product not found for category and id ${productId}`);
		return <div>Product not found</div>;
	}

	return (
		<div className='mt-[100px] mb-[120px]'>
			<h2 className='uppercase font-bold mb-[40px] tracking-[.857px] leading-[36px] text-[1.5rem] text-center'>
				you may also like
			</h2>
			<div>
				{product.others.map((other, idx) => (
					<div key={idx} className={`text-center uppercase font-bold`}>
						<picture>
							<source media="(min-width: 1024px)" srcSet={other.image.desktop} />
							<source media="(min-width: 768px)" srcSet={other.image.tablet} />
							<img src={other.image.mobile} alt={other.name} />
						</picture>
						<div>
							<h3 className='mt-8 text-[1.5rem] tracking-[1.714px] mb-8'>
								{other.name}
							</h3>
							<a href={other.to} className={`tracking-[1px] bg-reddish-orange ${(idx === 0 || idx === 1) ? 'mb-[36px]' : ''} 
										inline-block px-[30px] py-[15px] text-white`}>
								See Product
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Recommended