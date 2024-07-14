import MenuIcon from '/assets/menu-icon.svg'
import { useState } from 'react'
import ShopItems from './menu/Menu'

const Menu = () => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	const handleToggleMenu = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	return (
		<menu>
			<button onClick={handleToggleMenu} className='pl-[1.75rem]'>
				<img src={MenuIcon} alt="Menu" />
			</button>
			<ShopItems isMenuOpened={isMenuOpened} />
		</menu>
	)
}

export default Menu