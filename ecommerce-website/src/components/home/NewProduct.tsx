import { Link } from "react-router-dom"
import { NewProductProps } from "../../types/types"

const Newproduct = ({ name, to, new: NEWPRODUCT }: NewProductProps) => {
	return (
		<div className="bg-new-product-mobile md:bg-new-product-tablet lg:bg-new-product-desktop bg-almost-white bg-no-repeat bg-cover min-h-[100vh] 
			bg-[top_-94px_center]">
			<div className="font-manrope flex flex-col items-center pt-[108px] lg:pt-[140px] text-center lg:text-left lg:items-start
				lg:pl-[3rem]">
				<h1 className="text-white-opc-49 text-[.875rem] tracking-[10px] mb-4">
					{NEWPRODUCT}
				</h1>	
				<p className="text-white text-[2.25rem] font-bold leading-[2.5rem] tracking-[1.286px] mb-[1.5rem] uppercase max-w-[328px]">
					{name}
				</p>
				<p className="text-white-opc-75 leading-[1.5rem] text-[.935rem] max-w-[328px] mb-[1.75rem] lt:max-w-[349px]">
					Experience natural, lifelike audio and exceptional build
					quality made for the passionate music enthusiast.
				</p>
				<Link to={to} className="bg-reddish-orange text-white text-[.813rem] tracking-[1px] uppercase font-bold py-[1rem] px-[2rem]">
					See Product
				</Link>
			</div>
		</div>
	)
}

export default Newproduct