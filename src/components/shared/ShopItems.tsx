import { Menuitems } from '../../utils/constants'
import { Link } from 'react-router-dom'

type ShopItemsProps = {
	padding: string
}

const ShopItems = ({ padding }: ShopItemsProps) => {
	return (
		<div className='bg-almost-white px-[1.5rem] lt:px-[2.5rem] md:px-[40px] md:mt-[90px] 1110:px-0'>
			<div className="max-w-[1110px] w-full mx-auto">
				<section className={`${padding} md:flex md:gap-[10px] md:w-full`}>
					{Menuitems.map((item, idx) => (
						<div key={idx} className={`bg-lightgray pb-[22px] mt-[70px] md:mt-0 md:flex-1 rounded-[8px] ${idx === 2 ? '' : 'mb-[68px] md:mb-0'} flex flex-col items-center text-black font-bold uppercase`}>
							<img className='max-w-[80px] mt-[-45px]'
								src={item.image} alt={item.alt} />
							<p className='mt-[30px] text-[.935rem] tracking-[1.071px]'>
								{item.name}
							</p>
							<div className='mt-[17px] flex items-center gap-[13px]'>
								<Link to={item.to} className='opacity-50 text-second-black hover:text-reddish-orange hover:opacity-100 font-bold'>
									{item.about}
								</Link>
								<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 7 12" fill="none">
									<path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2" />
								</svg>
							</div>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}

export default ShopItems