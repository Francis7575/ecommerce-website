import { Menuitems } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import MenuIcon from '/assets/menu-icon.svg'

const Menu = () => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	const handleToggleMenu = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	const closeMenu = () => {
		setIsMenuOpened(false);
	}

	return (
		<menu className='z-50 lg:hidden pl-[1.75rem] md:pl-[40px]'>
			<button onClick={handleToggleMenu} className=''>
				<img src={MenuIcon} alt="Menu" />
			</button>
			<div className={`bg-white px-[1.5rem] py-[35px] absolute top-[90px] w-full min-h-screen
			${isMenuOpened ? '' : 'hidden'}`}>
				{Menuitems.map((item, idx) => (
					<div key={idx} className={`bg-lightgray pb-[22px] rounded-[8px] ${idx === 2 ? '' : 'mb-[68px]'} flex flex-col items-center text-black font-bold uppercase`}>
						<img className='max-w-[60px] mt-[-30px]'
							src={item.image} alt={item.alt} />
						<p className='mt-[30px] text-[.935rem] tracking-[1.071px]'>
							{item.name}
						</p>
						<div className='mt-[17px] flex items-center gap-[13px]'>
							<Link to={`${item.to}`} onClick={closeMenu}
								className='opacity-50'>
								{item.about}
							</Link>
							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 7 12" fill="none">
								<path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2" />
							</svg>
						</div>
					</div>
				))}
			</div>
		</menu >
	)
}

export default Menu