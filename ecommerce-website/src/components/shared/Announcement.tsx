import MobilePicture from '/assets/shared/mobile/image-best-gear.jpg'
import TabletPicture from '/assets/shared/mobile/image-best-gear.jpg'
import DesktopPicture from '/assets/shared/mobile/image-best-gear.jpg'

const Announcement = () => {
    return (
        <section className='px-[1.5rem] mt-[110px] mb-[2.5rem]'>
            <picture >
                <source srcSet={MobilePicture} media="(min-width: 768px)" className='rounded-[10px]' />
                <source srcSet={TabletPicture} media="(min-width: 1024px)" className='rounded-[10px]' />
                <img src={DesktopPicture} alt="" className='rounded-[10px]' />
            </picture>
            <div className='text-center mt-[2rem]'>
                <h3 className='uppercase font-bold text-[1.75rem] tracking-[1px] mb-[2rem]'>
                    Bringing you the <span className='text-reddish-orange'>best</span> audio gear
                </h3>
                <p className='opacity-50 leading-[25px] text-[.935rem]'>
                    Located at the heart of New York City, Audiophile is the premier store for high
                    end headphones, earphones, speakers, and audio accessories. We have a large showroom
                    and luxury demonstration rooms available for you to browse and experience a wide range
                    of our products. Stop by our store to meet some of the fantastic people who make
                    Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    )
}

export default Announcement