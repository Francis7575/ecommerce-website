import { useEffect, useRef } from 'react';
import useStore from '../store/useStore';
import { LimitCharacters } from '../utils/utils';
import IconOrderConfirmed from '/assets/checkout/icon-order-confirmation.svg'
import { Link } from 'react-router-dom';

type CheckOutModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (param: boolean) => void
  grandTotal: number
}

const CheckOutModal = ({ isModalOpen, setIsModalOpen, grandTotal }: CheckOutModalProps) => {
  const cartItems = useStore((state) => state.cartItems);
  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;
  const checkoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (checkoutRef.current && !checkoutRef.current.contains(event.target as Node)) {
        const cartButton = document.querySelector('.container');
        if (cartButton && cartButton.contains(event.target as Node)) {
          return; // If the click is on the cart button, do nothing
        }
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen])

  return (
    <>
      <section className="fixed inset-0 z-50 flex px-[1.5rem] justify-center items-center min-h-screen">
        <div ref={checkoutRef}
          className="container bg-white p-[32px] lg:p-[48px] rounded-[8px] w-full max-w-[540px]">
          <img src={IconOrderConfirmed} alt="Order confirmation" className='w-[64px] mb-[23px]' />
          <div className='text-[1.2rem] md:text-[2rem] uppercase  font-bold'>
            <span className='block leading-[28px] lg:leading-[36px] tracking-[0.857px] lg:tracking-[1.143px]'>Thank you </span>
            <span className='leading-[28px] lg:leading-[36px] tracking-[0.857px] lg:tracking-[1.143px]'>for your order</span>
          </div>
          <p className='mt-4 leading-[25px] text-[.935rem] opacity-50 text-second-black mb-[24px]'>
            You will receive an email confirmation shortly.
          </p>
          <section className='md:flex'>
            <div className='bg-fourth-lightgray md:flex-1 p-[1.5rem] rounded-tl-[8px] rounded-tr-[8px] md:rounded-br-[8px]'>
              <div className='flex justify-between items-start border-b border-black-20 pb-[12px] w-full'>
                <div className='flex gap-4'>
                  <img src={firstItem.image} alt="" className='w-[64px]' />
                  <div className='flex flex-col font-bold'>
                    <p className='text-[.935rem] leading-[25px]'>{LimitCharacters(firstItem.name)}</p>
                    <span className='text-[.875rem] leading-[25px] opacity-50'>{`$ \u00A0${(firstItem.basePrice * firstItem.productQuantity).toLocaleString()}`}</span>
                  </div>
                </div>
                <span className='opacity-50 text-[.935rem] font-bold'>x{firstItem.productQuantity}</span>
              </div>
              <p className='text-center opacity-50 mt-[13px] tracking-[-0.214px] font-bold text-[.85rem]'>
                and {otherItemsCount} other item(s)
              </p>
            </div>
            <div className='bg-second-black md:flex-1 md:flex md:flex-col md:justify-center pt-[15px] pb-[19px] pl-[24px] rounded-br-[8px] md:rounded-tr-[8px] *:rounded-bl-[8px]'>
              <p className='text-white opacity-50 leading-[25px] text-[.935rem] mb-[8px]'>GRAND TOTAL</p>
              <span className='text-white font-bold text-[1.125rem]'>$ {grandTotal.toLocaleString()}</span>
            </div>
          </section>
          <Link to="/" className='uppercase tracking-[1px] font-bold text-white text-[.935rem] bg-reddish-orange hover:bg-reddish-hover w-full py-[15px] inline-block text-center mt-[23px]'>
            Back To Home
          </Link>
        </div>
      </section>  
      <div className="fixed inset-0 bg-black-40"></div>
    </>

  )
}

export default CheckOutModal