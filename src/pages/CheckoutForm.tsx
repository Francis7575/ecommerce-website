import { useLocation, useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from "react"
import { FormData } from "../types/types";
import { RadioFields } from "../utils/constants";
import CartSummary from '../components/CartSummary';

const initialFormData: FormData = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '',
  zipcode: '',
  city: '',
  country: '',
  paymentDetails: null,
  eMoneyNumber: '',
  eMoneyPin: '',
};

const CheckoutForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const navigate = useNavigate()
  const location = useLocation();
  const { category, productId } = location.state || {}; // Access the passed state
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData(prevState => ({
        ...prevState,
        paymentDetails: value as "eMoney" | "cashDelivery" | null,
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleGoBack = () => {
    if (category && productId) {
      navigate(`/${category}/${productId}`);
    } else {
      navigate(-1); // Go back to the previous page if category/productId is undefined
    }
  };

  const InputClasses = "border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
  const LabelClasses = "text-[.85rem] md:text-[1rem] font-bold tracking-[-0.214px]"
  const flexColClasses = "flex flex-col gap-[9px]"

  return (
    <div className='max-w-[662px] lg:max-w-[1110px] mx-auto lg:px-8 xl:px-0'>
      <div className="pl-[1.5rem] md:pl-0 mb-[1.5rem] lg:mt-[79px] mt-12">
        <button onClick={handleGoBack}
          className='text-second-black opacity-50 text-[1rem] leading-[25px]'>
          Go Back
        </button>
      </div>
      <section className='max-w-[662px] lg:max-w-[1110px] px-[1.5rem] lg:mb-[141px] md:px-0 lg:gap-[30px] w-full mx-auto lg:flex mt-4 md:mt-12'>
        <form onSubmit={handleSubmit}
          className="lg:flex-1 bg-white max-w-[662px] md:max-w-[730px] w-full px-[1.5rem] pt-[1.5rem] pb-[31px] rounded-[8px]">
          <h1 className="text-[1.75rem] md:text-[2rem] mb-8 md:mb-[41px] font-bold uppercase tracking-[1px]">
            Checkout
          </h1>
          <section className="mb-8 md:mb-[53px]">
            <h2 className="tracking-[0.929px] text-[.935rem] uppercase leading-[25px] font-bold text-reddish-orange mb-4">
              Billing details
            </h2>
            <div className="flex flex-col gap-[1.5rem] md:gap-4 md:grid md:grid-cols-2">
              <div className={flexColClasses}>
                <label htmlFor="name" className={LabelClasses}>Name</label>
                <input type="text" name='name' id='name' placeholder='Alexei Ward' value={formData.name} onChange={handleInputChange} className={InputClasses} />
              </div>
              <div className={flexColClasses}>
                <label htmlFor="email" className={LabelClasses}>Email Address</label>
                <input type='email' name='email' id='email' placeholder='alexei@mail.com' value={formData.email} onChange={handleInputChange} className={InputClasses} />
              </div>
              <div className={flexColClasses}>
                <label htmlFor="phoneNumber" className={LabelClasses}>Phone Number</label>
                <input name='phoneNumber' type='number' id='phoneNumber' placeholder='+1 202-555-0136' value={formData.phoneNumber} onChange={handleInputChange} className={InputClasses} />
              </div>
            </div>
          </section>
          <section className="mb-8 md:mb-[61px]">
            <h2 className="tracking-[0.929px] text-[.935rem] uppercase leading-[25px] font-bold text-reddish-orange mb-4">
              Shipping Info
            </h2>
            <div className="flex flex-col gap-[1.5rem]">
              <div className={flexColClasses}>
                <label htmlFor="address" className={LabelClasses}>Your Address</label>
                <input name='address' type='text' id='address' placeholder='1137 Williams Avenue' value={formData.address} onChange={handleInputChange} className={InputClasses} />
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-4'>
                <div className={flexColClasses}>
                  <label htmlFor="zipcode" className={LabelClasses}>ZIP Code</label>
                  <input name='zipcode' type='number' id='zipcode' placeholder='10001' value={formData.zipcode} onChange={handleInputChange} className={InputClasses} />
                </div>
                <div className={flexColClasses}>
                  <label htmlFor="city" className={LabelClasses}>City</label>
                  <input name='city' type='text' id='city' placeholder='New York' value={formData.city} onChange={handleInputChange} className={InputClasses} />
                </div>
                <div className={flexColClasses}>
                  <label htmlFor="country" className={LabelClasses}>Country</label>
                  <input name='country' type='text' id='country' placeholder='United States' value={formData.country} onChange={handleInputChange} className={InputClasses} />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="tracking-[0.929px] text-[.935rem] uppercase leading-[25px] font-bold text-reddish-orange mb-4">
              Payment Details
            </h2>
            <div className="flex flex-col gap-4 md:flex-row">
              <h3 className={`${LabelClasses} md:w-1/2`}>Payment Method</h3>
              <div></div>
              <div className="flex flex-col gap-4 md:w-1/2">
                {RadioFields.map((radioField, idx) => (
                  <div className='md:flex md:flex-col' key={idx}>
                    <label htmlFor={radioField.id}
                      className={`flex items-center gap-4 w-full border rounded-[8px] radio-container font-bold tracking-[-0.214px]
										py-[18px] pl-4 ${formData.paymentDetails === radioField.name ? 'border-reddish-orange' : 'border-third-lightgray'}`}>
                      <input className={InputClasses}
                        value={radioField.name as keyof FormData as string}
                        onChange={handleInputChange}
                        checked={formData.paymentDetails === radioField.name}
                        type={radioField.type}
                        name={radioField.name}
                        id={radioField.id}
                      />
                      <span className="custom-radio"></span>
                      {radioField.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {formData.paymentDetails === "eMoney" && (
              <section className="flex flex-col gap-[1.5rem] md:gap-4 mt-8 md:flex-row">
                <div className="flex flex-col gap-[9px] md:flex-1">
                  <label htmlFor="eMoneyNumber" className={LabelClasses}>
                    e-Money Number
                  </label>
                  <input className={InputClasses}
                    value={formData.eMoneyNumber}
                    onChange={handleInputChange}
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    type="number"
                    placeholder='238521993' />
                </div>
                <div className="flex flex-col gap-[9px] md:flex-1">
                  <label htmlFor="eMoneyPin" className={LabelClasses}>
                    e-Money PIN
                  </label>
                  <input className={InputClasses}
                    value={formData.eMoneyPin}
                    onChange={handleInputChange}
                    id="eMoneyPin"
                    name="eMoneyPin"
                    type="number"
                    placeholder='6891' />
                </div>
              </section>
            )}
            {formData.paymentDetails === "cashDelivery" && (
              <p className="mt-8 text-[.9rem] text-second-black opacity-50 max-w-[500px] mx-auto">
                The Cash on Delivery option enables you to pay in cash when our delivery courier arrives at your residence.
                Just make sure your address is correct so that your order will not be cancelled.
              </p>
            )}
          </section>
        </form>
        <CartSummary />
      </section>
    </div>
  )
}

export default CheckoutForm