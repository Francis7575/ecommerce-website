import data from '../data.json'
import { ProductItem } from '../types/types';
import HeadphonesImage from '/assets/product-headphones/mobile/headphones.png'
import SpeakerImage from '/assets/product-zx9-speaker/mobile/speaker.png'
import EarphonesImage from '/assets/product-yx1-earphones/mobile/earphones.png'

const Menuitems = [
    { image: HeadphonesImage, alt: 'Headphones', name: 'Headphones', about: 'Shop', to: '/headphones' },
    { image: SpeakerImage, alt: 'Speaker', name: 'Speakers', about: 'Shop', to: '/speakers' },
    { image: EarphonesImage, alt: 'Earphones', name: 'Earphones', about: 'Shop', to: '/earphones' },
]

const Headphones: ProductItem[] = data  
    .filter((item: any) => item.category === 'headphones')
    .map((item: any) => ({
        id: item.id,
        mobile: item.image.mobile,
        tablet: item.image.tablet,
        desktop: item.image.desktop,
        name: item.name,
        paragraph: item.description,
        link: 'See Product',
        to: `/${item.category}/${item.id}`,
        new: item.name === 'XX99 Mark II Headphones' ? 'NEW PRODUCT' : undefined,
    }));

const Speakers: ProductItem[] = data
    .filter((item: any) => item.category === 'speakers')
    .map((item: any) => ({
        id: item.id,
        mobile: item.image.mobile,
        tablet: item.image.tablet,
        desktop: item.image.desktop,
        name: item.name,
        paragraph: item.description,
        link: 'See Product',
        to: `/${item.category}/${item.id}`,
        new: item.name === 'ZX9 Speaker' ? 'NEW PRODUCT' : undefined,
    }));

const Earphones: ProductItem[] = data
    .filter((item: any) => item.category === 'earphones')
    .map((item: any) => ({
        id: item.id,
        mobile: item.image.mobile,
        tablet: item.image.tablet,
        desktop: item.image.desktop,
        name: item.name,
        paragraph: item.description,
        link: 'See Product',
        to: `/${item.category}/${item.id}`,
        new: 'NEW PRODUCT'
    }));

export const ShippingFields = [
    { name: 'address', type: 'text', id: 'address', label: 'Your Address', placeholder: '1137 Williams Avenue' },
    { name: 'zipcode', type: 'number', id: 'zipcode', label: 'ZIP Code', placeholder: '10001' },
    { name: 'city', type: 'text', id: 'city', label: 'City', placeholder: 'New York' },
    { name: 'country', type: 'text', id: 'country', label: 'Country', placeholder: 'United States' },
]

export const RadioFields = [
    { name: 'eMoney', type: 'radio', id: 'eMoney', label: 'e-Money' },
    { name: 'cashDelivery', type: 'radio', id: 'cash delivery', label: 'Cash on Delivery' },
]


export { Headphones, Speakers, Earphones, Menuitems }

// <div key={idx} className="flex flex-col gap-[9px]">
//                     <label htmlFor={field.id} className="font-bold tracking-[-0.214px]">
//                       {field.label}
//                     </label>
//                     <input className="border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
//                       value={formData[field.name as keyof FormData] as string}
//                       onChange={handleInputChange}
//                       type={field.type}
//                       name={field.name}
//                       id={field.id}
//                       placeholder={field.placeholder}
//                     />
//                   </div>
//                 ))}