import { useParams, Link } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from "react"
import { FormData } from "../../types/types";
import { BillingFields, ShippingFields, RadioFields } from "../../utils/constants";

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
	const { category, productId } = useParams();

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


	return (
		<>

			<div className="pt-4 pl-[1.5rem] mb-[1.5rem]">
				<Link to={`/${category}/${productId}`}
					className='text-second-black opacity-50 text-[.935rem] leading-[25px]'>
					Go Back
				</Link>
			</div>
			<form onSubmit={handleSubmit}
				className="px-[1.5rem] mb">
				<div className="bg-white px-[1.5rem] pt-[1.5rem] pb-[31px]">
					<h1 className="text-[1.75rem] mb-8 font-bold uppercase tracking-[1px]">
						Checkout
					</h1>
					<section className="mb-8">
						<h2 className="tracking-[0.929px] text-[.935rem] uppercase leading-[25px] font-bold text-reddish-orange mb-4">
							Billing details
						</h2>
						<div className="flex flex-col gap-[1.5rem]">
							{BillingFields.map((field, idx) => (
								<div key={idx} className="flex flex-col gap-[9px]">
									<label htmlFor={field.id} className="font-bold tracking-[-0.214px]">
										{field.label}
									</label>
									<input className="border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
										value={formData[field.name as keyof FormData] as string}
										onChange={handleInputChange}
										type={field.type}
										name={field.name}
										id={field.id}
									/>
								</div>
							))}
						</div>
					</section>
					<section className="mb-8">
						<h2 className="tracking-[0.929px] text-[.935rem] uppercase leading-[25px] font-bold text-reddish-orange mb-4">
							Shipping Info
						</h2>
						<div className="flex flex-col gap-[1.5rem]">
							{ShippingFields.map((field, idx) => (
								<div key={idx} className="flex flex-col gap-[9px]">
									<label htmlFor={field.id} className="font-bold tracking-[-0.214px]">
										{field.label}
									</label>
									<input className="border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
										value={formData[field.name as keyof FormData] as string}
										onChange={handleInputChange}
										type={field.type}
										name={field.name}
										id={field.id}
									/>
								</div>
							))}
						</div>
					</section>
					<section>
						<h2 className="tracking-[0.929px] text-[.935rem] uppercase leading-[25px] font-bold text-reddish-orange mb-4">
							payment details
						</h2>
						<div className="flex flex-col gap-4">
							{RadioFields.map((radioField, idx) => (
								<div key={idx} className={`flex gap-4 w-full border  rounded-[8px] 
										py-[18px] pl-4 ${formData.paymentDetails === radioField.name ? 'border-reddish-orange' : 'border-third-lightgray'}`}>
									<input className="border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
										value={radioField.name as keyof FormData as string}
										onChange={handleInputChange}
										checked={formData.paymentDetails === radioField.name}
										type={radioField.type}
										name={radioField.name}
										id={radioField.id}
									/>
									<label htmlFor={radioField.id} className="font-bold tracking-[-0.214px]">
										{radioField.label}
									</label>
								</div>
							))}
						</div>
						<section className="flex flex-col gap-[1.5rem] mt-8">
							<div className="flex flex-col gap-[9px]">
								<label htmlFor="eMoneyNumber" className="font-bold tracking-[-0.214px]">
									e-Money Number
								</label>
								<input className="border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
									value={formData.eMoneyNumber}
									onChange={handleInputChange}
									id="eMoneyNumber"
									name="eMoneyNumber"
									type="number" />
							</div>
							<div className="flex flex-col gap-[9px]">
								<label htmlFor="eMoneyPin" className="font-bold tracking-[-0.214px]">
									e-Money PIN
								</label>
								<input className="border border-third-lightgray pl-[1.5rem] py-[18px] rounded-[8px] outline-none"
									value={formData.eMoneyPin}
									onChange={handleInputChange}
									id="eMoneyPin"
									name="eMoneyPin"
									type="number" />
							</div>
						</section>
					</section>
				</div>
			</form>
		</>
	)
}

export default CheckoutForm