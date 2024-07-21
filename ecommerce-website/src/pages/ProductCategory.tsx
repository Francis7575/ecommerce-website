import { useParams } from 'react-router-dom'
import { Header, ShopItems, Announcement, Footer } from '../components'
import { Headphones, Speakers, Earphones } from "../utils/constants"
import { Link } from "react-router-dom"

const ProductCategory = () => {
    const { category } = useParams()

    let items
    let title

    switch (category) {
        case 'headphones':
            items = Headphones
            title = 'Headphones'
            break
        case 'speakers':
            items = Speakers
            title = 'Speakers'
            break
        case 'earphones':
            items = Earphones
            title = 'Earphones'
            break
        default:
            return <div>Category not found</div>
    }

    return (
        <>
            <Header />
            <div className="bg-second-black py-[2rem] text-center">
                <h2 className="uppercase tracking-[2px] font-bold text-[1.75rem] md:text-[2.5rem] text-white">{title}</h2>
            </div>
            <div className='max-w-[1110px] mx-auto'>
                <section className="mt-[64px]">
                    {items.map((item, idx) => (
                        <div key={idx} className={`px-[1.5rem] lg:px-[40px] 1110:px-0 md:px-[2.5rem] flex flex-col items-center lg:mb-[140px] lg:gap-[7rem]
                        ${idx === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <picture className="w-full max-w-[689px] flex justify-center lg:flex-1">
                                <source srcSet={item.desktop} media="(min-width: 1024px)" />
                                <source srcSet={item.tablet} media="(min-width: 768px)" />
                                <img src={item.mobile} alt={item.name} />
                            </picture>
                            <div className={`flex flex-col items-center lg:items-start text-center lg:text-left md:gap-0 mb-[70px] lg:flex-1`}>
                                <h3 className={` ${idx === 0 && 'mt-[2rem]'} text-[.875rem tracking-[10px] uppercase text-reddish-orange`}>
                                    {item.new}
                                </h3>
                                <div className='flex flex-col items-center lg:items-start gap-[1.5rem] mt-8'>
                                    <h4 className={`text-second-black font-bold uppercase tracking-[1px] max-w-[387px] font-bold text-[1.75rem] md:text-[2.5rem] `}>
                                        {item.name}
                                    </h4>
                                    <p className="text-[.935rem] leading-[25px] opacity-50 text-second-black md:mb-[1.5rem] max-w-[572px] lg:max-w-[445px]">
                                        {item.paragraph}
                                    </p>
                                    <Link to={item.to} className="text-center bg-reddish-orange hover:bg-reddish-hover text-white text-[.813rem] tracking-[1px] uppercase font-bold py-[15px] w-full max-w-[160px]">
                                        {item.link}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
            <ShopItems padding="pb-0" />
            <Announcement />
            <Footer />
        </>
    )
}

export default ProductCategory
