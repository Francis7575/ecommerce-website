import data from '../../data.json';

type Props = {
  productId: number;
};

const ImageGallery = ({ productId }: Props) => {
  const product = data.find(item => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Convert the gallery object values to an array
  const gallery = Object.values(product.gallery);

  return (
    <div className='mt-[100px] flex flex-col gap-8 md:flex-row'>
      <div className='md:flex md:flex-col md:gap-6'>
        {gallery.slice(0, 1).map((image, index) => (
          <div key={index}>
            <picture>
              <source srcSet={image.desktop} media="(min-width: 1024px)" />
              <source srcSet={image.tablet} media="(min-width: 768px)" />
              <img src={image.mobile} alt={`Gallery image ${index + 1}`} className='max-w-[500px] md:max-w-none mx-auto rounded-[10px]' />
            </picture>
          </div>
        ))}
        <div>
          <picture>
            <source srcSet={gallery[1].desktop} media="(min-width: 1024px)" />
            <source srcSet={gallery[1].tablet} media="(min-width: 768px)" />
            <img src={gallery[1].mobile} alt='Gallery image 3' className='max-w-[500px] md:max-w-none mx-auto h-full rounded-[10px]' />
          </picture>
        </div>
      </div>
      <div>
        <picture>
          <source srcSet={gallery[2].desktop} media="(min-width: 1024px)" />
          <source srcSet={gallery[2].tablet} media="(min-width: 768px)" />
          <img src={gallery[2].mobile} alt='Gallery image 3' className='max-w-[500px] md:max-w-none mx-auto h-full rounded-[10px]' />
        </picture>
      </div>
    </div>
  );
};

export default ImageGallery;
