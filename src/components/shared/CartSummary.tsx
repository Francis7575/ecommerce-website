import useStore from "../../store/useStore";

const CartSummary = () => {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <section className="px-[1.5rem]">
      <div className="bg-white px-[1.5rem] py-8 rounded-[8px] w-full mt-8">
        <h2 className="uppercase font-bold text-[1.125rem]">
          Summary
        </h2>
        {cartItems.map((item) => {
          console.log(cartItems)
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>${item.price.toLocaleString()}</p>
            </li>
          )
        })}
      </div>
    </section>
  )
}

export default CartSummary