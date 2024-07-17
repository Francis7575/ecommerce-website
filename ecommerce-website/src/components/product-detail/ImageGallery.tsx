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
    <div className='mt-[100px] flex flex-col gap-[22px]'>
      {gallery.map((image, index) => (
        <div key={index} className=''>
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <img src={image.mobile} alt={`Gallery image ${index + 1}`} />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
