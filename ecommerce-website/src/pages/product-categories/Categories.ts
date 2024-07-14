import data from '../../data.json'

export type ProductItem = {
    mobile: string;
    tablet: string;
    desktop: string;
    title: string;
    paragraph: string;
    link: string;
    to: string;
    new?: string;
}

const Headphones: ProductItem[] = data
    .filter((item: any) => item.category === 'headphones')
    .map((item: any) => ({
        mobile: item.image.mobile,
        tablet: item.image.tablet,
        desktop: item.image.desktop,
        title: item.name,
        paragraph: item.description,
        link: 'See Product',
        to: '',
        new: item.name === 'XX99 Mark II Headphones' ? 'NEW PRODUCT' : undefined, 
    }));

const Speakers: ProductItem[] = data
    .filter((item: any) => item.category === 'speakers')
    .map((item: any) => ({
        mobile: item.image.mobile,
        tablet: item.image.tablet,
        desktop: item.image.desktop,
        title: item.name,
        paragraph: item.description,
        link: 'See Product',
        to: '',
        new: item.name === 'ZX9 Speaker' ? 'NEW PRODUCT' : undefined, 
    }));

const Earphones: ProductItem[] = data
    .filter((item: any) => item.category === 'earphones')
    .map((item: any) => ({
        mobile: item.image.mobile,
        tablet: item.image.tablet,
        desktop: item.image.desktop,
        title: item.name,
        paragraph: item.description,
        link: 'See Product',
        to: '',
        new: 'NEW PRODUCT' 
    }));

export { Headphones, Speakers, Earphones }
