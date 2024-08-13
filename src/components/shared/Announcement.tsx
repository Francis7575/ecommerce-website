import MobilePicture from '/assets/shared/mobile/image-best-gear.jpg'
import TabletPicture from '/assets/shared/tablet/image-best-gear.jpg'
import DesktopPicture from '/assets/shared/desktop/image-best-gear.jpg'

const Announcement = () => {
    return (
        <section className='px-[1.5rem] lt:px-[2.5rem] mt-[110px] mb-[2.5rem] md:mb-[96px] md:px-[40px] 1110:px-0 '>
            <div className="max-w-[1110px] w-full mx-auto lg:flex lg:gap-8 lg:flex-row-reverse lg:justify-between lg:items-center">
                <picture className='flex justify-center'>
                    <source srcSet={DesktopPicture} media="(min-width: 1024px)" />
                    <source srcSet={TabletPicture} media="(min-width: 768px)" />
                    <img src={MobilePicture} alt="" className='rounded-[10px]' />
                </picture>
                <div className='text-center lg:text-left mt-[2rem] md:mt-[3rem]'>
                    <h3 className='uppercase font-bold text-[1.75rem] md:text-[2.5rem] md:leading-[44px] lg:max-w-[445px] md:tracking-[1.429px] md:max-w-[573px] md:mx-auto tracking-[1px] mb-[2rem]'>
                        Bringing you the <span className='text-reddish-orange'>best</span> audio gear
                    </h3>
                    <p className='opacity-50 leading-[25px] text-[.935rem] md:max-w-[573px] lg:max-w-[445px] md:mx-auto lg:mx-0'>
                        Located at the heart of New York City, Audiophile is the premier store for high
                        end headphones, earphones, speakers, and audio accessories. We have a large showroom
                        and luxury demonstration rooms available for you to browse and experience a wide range
                        of our products. Stop by our store to meet some of the fantastic people who make
                        Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Announcement