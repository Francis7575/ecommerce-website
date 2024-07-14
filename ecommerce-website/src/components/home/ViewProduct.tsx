import { Link } from "react-router-dom"
import MobileSpeaker from '/assets/product-zx9-speaker/mobile/zx9-speaker.png'
import TabletSpeaker from '/assets/product-zx9-speaker/tablet/zx9-speaker.png'
import DesktopSpeaker from '/assets/product-zx9-speaker/desktop/zx9-speaker.png'

const ViewProduct = () => {
	return (
		<section className="px-[1.5rem]">
			<div className="bg-reddish-orange flex flex-col items-center text-center rounded-[8px] py-[55px]">
				<picture>
					<source srcSet={TabletSpeaker} media="(min-width: 768px)" />
					<source srcSet={DesktopSpeaker} media="(min-width: 1024px)" />
					<img src={MobileSpeaker} alt="ZX9 SPEAKER" />
				</picture>
				<h2 className="text-white max-w-[250px] text-[2.25rem] md:text-[3.5rem] font-bold uppercase tracking-[2px] md:tracking-[2px] leading-[40px] md:leading-[58px] mt-[32px] md:mt-[64px] mb-[24px]">
					ZX9 SPEAKER
				</h2>
				<p className="text-white-opc-75 text-[.935rem] leading-[25px] mb-[40px] max-w-[280px] md:max-w-[349px]">
					Upgrade to premium speakers that are phenomenally built to
					deliver truly remarkable sound.
				</p>
				<Link to="/" className="bg-black text-white text-[.813rem] tracking-[1px] uppercase font-bold py-[15px] px-[30px]">
					See Product
				</Link>
			</div>
			<div className="mt-[1.5rem] test bg-ZX7-speaker-mobile md:bg-ZX7-speaker-tablet bg-no-repeat h-[367px] bg-cover ">
				<div className="pl-[1.5rem] pt-[101px] uppercase font-bold w-full">
					<h2 className="mb-8 text-[1.75rem] tracking-[2px]">
						ZX7 SPEAKER
					</h2>
					<Link to="/" className="border border-black text-[.813rem] tracking-[1px] py-[1rem] px-[30px]">
						See Product
					</Link>
				</div>
			</div>
			<div className="bg-yx1-earphones-mobile md:bg-yx1-earphones-tablet bg-no-repeat bg-cover h-[300px] mt-[1.5rem] rounded-[1rem]"></div>
			<div className="bg-lightgray py-[41px] mt-[1.5rem] pl-[1.5rem] rounded-[8px]">
				<div className="flex flex-col gap-[2rem] max-w-[247px] uppercase font-bold">
					<h2 className="text-[1.75rem] tracking-[2px]">
						YX1 EARPHONES
					</h2>
					<Link to="/" className="border border-black max-w-[160px] text-[.813rem] tracking-[1px] py-[1rem] text-center">
						See Product
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ViewProduct