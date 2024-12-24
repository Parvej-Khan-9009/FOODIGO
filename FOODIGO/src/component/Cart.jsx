import CartList from "./CartList";
import { useSelector } from "react-redux";
import { menuListImageDatabase } from "../utils/Constant";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cartData = useSelector((store) => store.cart.items);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("localCartData", JSON.stringify(cartData));
  });

  if (cartData.length == 0) return <EmptyCart/>

  let totalPrice = cartData.reduce((accum, curr) => {
    return accum + curr.price * curr.quantity;
  }, 0);

  return (
    <>
      <div className="bg-[#E9ECEE] min-h-lvh w-full md:pt-28 pt-20 xs:pt-[54px]">
        <div className="xl:w-[42%] lg:w-[50%] md:w-[65%] sm:w-[80%] w-[90%] xs:w-[100%] min-h-[80vh] mx-auto bg-white pb-5">
          <div className="sm:w-[83%] w-[97%] mx-auto">
            <div className="flex gap-4 items-center pt-4">
              <img
                className="w-[100px] xs:w-[80px] h-[100px] xs:h-[80px] xs:rounded-md"
                src={menuListImageDatabase + cartData[0]?.restaurant?.image}
              />
              <div>
                <p className="font-semibold">{cartData[0]?.restaurant?.name}</p>
                <span className="text-sm">{cartData[0]?.restaurant?.area}</span>
              </div>
            </div>

            {cartData.map((item, index) => {
              return (
                <CartList
                  key={index}
                  name={item.name}
                  price={item?.price}
                  quantity={item.quantity}
                  index={index}
                />
              );
            })}

            <div className="pt-10 pb-6 flex flex-col gap-3 border-b-4 border-black">
              <h1 className="sm:text-base text-sm font-medium">Bill Details</h1>
              <div className="flex justify-between text-gray-700 sm:text-base text-sm">
                <span>Item Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 sm:text-base text-sm">
                <span>Delivery Fee | 2.0 kms</span>
                <span>₹42</span>
              </div>
              <div className="flex justify-between text-gray-700 sm:text-base text-sm">
                <span>Discount for you</span>
                <span>-₹25</span>
              </div>
            </div>
            <div className="py-3">
              <div className="flex justify-between font-bold sm:text-base text-sm">
                <span>TO PAY</span>
                <span>₹{(totalPrice + 42 - 25).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
