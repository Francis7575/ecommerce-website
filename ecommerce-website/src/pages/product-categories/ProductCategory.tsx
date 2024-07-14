import { useParams } from 'react-router-dom'
import { Header, ShopItems, Announcement, Footer } from '../../components'
import { Headphones, Speakers, Earphones } from "./Categories"
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
                <h2 className="uppercase tracking-[2px] font-bold text-[1.75rem] text-white">{title}</h2>
            </div>
            <section className="mt-[64px]">
                {items.map((item, idx) => (
                    <div key={idx} className="px-[1.5rem] md:px-[2.5rem] flex flex-col items-center">
                        <picture className="w-full max-w-[689px]">
                            <source srcSet={item.desktop} media="(min-width: 1024px)" />
                            <source srcSet={item.tablet} media="(min-width: 768px)" />
                            <img src={item.mobile} alt={item.title} />
                        </picture>
                        <div className={`flex flex-col items-center text-center gap-[1.5rem] md:gap-0 mb-[120px]`}>
                            <h3 className={` ${idx === 0 && 'mt-[2rem] mb-4'} text-[.875rem tracking-[10px] uppercase text-reddish-orange`}>
                                {item.new}
                            </h3>
                            <h4 className={`text-second-black font-bold uppercase tracking-[1px] md:mb-[2rem] max-w-[387px] font-bold text-[1.75rem] md:text-[2.5rem] ${(idx === 1 || idx === 2) ? 'md:mt-[52px]' : ''}`}>
                                {item.title}
                            </h4>
                            <p className="text-[.935rem] leading-[25px] opacity-50 text-second-black md:mb-[1.5rem] max-w-[572px]">
                                {item.paragraph}
                            </p>
                            <Link to={item.to} className="bg-reddish-orange text-white text-[.813rem] tracking-[1px] uppercase font-bold py-[15px] w-full max-w-[160px]">
                                {item.link}
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
            <ShopItems padding="pb-0" />
            <Announcement />
            <Footer />
        </>
    )
}

export default ProductCategory
