    import { useParams, Link } from 'react-router-dom';
    import { AddToCart, Header, ShopItems, Features, InTheBox, ImageGallery, Recommended, Announcement, Footer } from '../components';
    import { useEffect } from 'react';
    import data from '../data.json';
    import useStore from '../store/useStore';

    const ProductDetail = () => {
        const { category, productId } = useParams();
        const productQuantity = useStore((state) => state.productQuantity);
        const totalPrice = useStore((state) => state.totalPrice);
        const increment = useStore((state) => state.increment);
        const decrement = useStore((state) => state.decrement);
        const setTotalPrice = useStore((state) => state.setTotalPrice);
        const product = data.find(item => item.category === category && item.id === parseInt(productId!));

        useEffect(() => {
            if (product) {
                setTotalPrice(Number(product.price));
            }
        }, [product, setTotalPrice]);

        if (!product) {
            return <div>Product not found</div>;
        }
        const basePrice = Number(product.price);

        return (
            <div>
                <Header />
                <div className='px-[1.5rem]'>
                    <div className='mt-4 mb-[1.5rem]'>
                        <Link to={`/${category}`} className='text-second-black opacity-50 text-[.935rem] leading-[25px]'>
                            Go Back
                        </Link>
                    </div>
                    <div>
                        <picture className="w-full max-w-[689px]">
                            <source srcSet={product.image.desktop} media="(min-width: 1024px)" />
                            <source srcSet={product.image.tablet} media="(min-width: 768px)" />
                            <img src={product.image.mobile} alt={product.name} />
                        </picture>
                        <div>
                            {product.new && (
                                <h2 className='mt-8 mb-[1.5rem] text-[.875rem] tracking-[10px] uppercase text-reddish-orange'>
                                    New Product
                                </h2>
                            )}
                            <h3 className='font-bold text-[1.75rem] mb-[1.5rem] tracking-[1px] uppercase'>
                                {product.name}
                            </h3>
                            <p className='max-w-[339px] text-[.935rem] leading-[25px] opacity-80 mb-[1.5rem] text-second-black'>
                                {product.description}
                            </p>
                            <p className='flex gap-2 mb-8 text-[1.15rem] font-bold text-second-black tracking-[1.286px] uppercase'>
                                <span>$</span>
                                <span>{totalPrice.toLocaleString()}</span>
                            </p>
                        </div>
                    </div>
                    <AddToCart
                        productId={parseInt(productId!)}
                        productQuantity={productQuantity}
                        increment={() => increment(basePrice)}
                        decrement={() => decrement(basePrice)}
                        productImage={product.cart.image}
                        productName={product.name}
                        productPrice={totalPrice}
                    />
                    <Features productId={parseInt(productId!)} />
                    <InTheBox productId={parseInt(productId!)} />
                    <ImageGallery productId={parseInt(productId!)} />
                    <Recommended productId={parseInt(productId!)} />
                </div>
                <ShopItems padding="0" />
                <Announcement />
                <Footer />
            </div>
        );
    };

    export default ProductDetail;
