import useStore from "../../store/useStore";
import { LimitCharacters } from '../../utils/utils'

const CartSummary = () => {
  const cartItems = useStore((state) => state.cartItems);
  const totalPrice = useStore((state) => state.totalPrice);

  const shippingCost = 50;
  const vat = 1079;
  const grandTotal = totalPrice + shippingCost + vat;

  return (
    <>
      {cartItems.length > 0 && (
        <section className="px-[1.5rem] mb-[116px] lg:flex-2 lg:w-full lg:max-w-[350px] lg:px-0">
          <div className="bg-white px-[1.5rem] md:px-[33px] py-8 rounded-[8px] w-full mt-8 lg:mt-0">
            <h2 className="uppercase font-bold text-[1.125rem] mb-[31px]">
              Summary
            </h2>
            <ul className="flex flex-col gap-[1.5rem]">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.image} className="w-[64px]" alt="product image" />
                    <div className="font-bold">
                      <p className="text-[.935rem] leading-[25px] uppercase">{LimitCharacters(item.name)}</p>
                      <p className="text-[.875rem] leading-[25px] opacity-40">{`$ \u00A0${item.basePrice.toLocaleString()}`}</p>
                    </div>
                  </div>
                  <p className="font-bold text-[.935rem] opacity-50 leading-[25px]">x{item.productQuantity}</p>
                </li>
              ))}
            </ul>
            <section className="uppercase my-8">
              <div className="flex items-center justify-between mb-[8px]">
                <span className="text-[.935rem] opacity-50">Total</span>
                <span className="text-[1.125rem] font-bold">$ {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between mb-[8px]">
                <span className="text-[.935rem] opacity-50">Shipping</span>
                <span className="text-[1.125rem] font-bold">$ {shippingCost}</span>
              </div>
              <div className="flex items-center justify-between mb-[24px]">
                <span className="text-[.935rem] opacity-50">VAT (INCLUDED)</span>
                <span className="text-[1.125rem] font-bold">$ {vat.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[.935rem] opacity-50">Grand Total</span>
                <span className="text-[1.125rem] font-bold text-reddish-orange">$ {grandTotal.toLocaleString()}</span>
              </div>
            </section>
            <button className="bg-reddish-orange font-bold text-[.813rem]   py-[15px] tracking-[1px] uppercase text-white w-full">
              Continue & Pay
            </button>
          </div>
        </section>
      )}
    </>
  )
}

export default CartSummary