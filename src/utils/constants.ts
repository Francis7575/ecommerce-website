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

export const RadioFields = [
    { name: 'eMoney', type: 'radio', id: 'eMoney', label: 'e-Money' },
    { name: 'cashDelivery', type: 'radio', id: 'cash delivery', label: 'Cash on Delivery' },
]

export { Headphones, Speakers, Earphones, Menuitems }
