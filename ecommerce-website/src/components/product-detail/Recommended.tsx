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
		<div className='mt-[100px] mb-[120px] lg:mb-[140px]'>
			<h2 className='uppercase font-bold mb-[40px] md:mb-[56px] md:mb-[64px] tracking-[.857px] leading-[36px] text-[1.5rem] md:text-[2rem] text-center'>
				you may also like
			</h2>
			<div className='md:flex md:gap-[11px] lg:gap-[30px]'>
				{product.others.map((other, idx) => (
					<div key={idx} className={`text-center uppercase font-bold`}>
						<picture>
							<source media="(min-width: 1024px)" srcSet={other.image.desktop} />
							<source media="(min-width: 768px)" srcSet={other.image.tablet} />
							<img src={other.image.mobile} alt={other.name} className='max-w-[500px] mx-auto' />
						</picture>
						<div>
							<h3 className='mt-8 text-[1.5rem] tracking-[1.714px] mb-8'>
								{other.name}
							</h3>
							<Link to={other.to!} className={`tracking-[1px] bg-reddish-orange hover:bg-reddish-hover ${(idx === 0 || idx === 1) ? 'mb-[36px]' : ''} 
										inline-block px-[30px] py-[15px] text-white`}>
								See Product
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Recommended