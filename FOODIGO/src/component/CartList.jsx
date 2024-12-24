import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../utils/cartSlice";

function CartList({ name, price, quantity, index }) {
  const dispatch = useDispatch();

  function increaseQuantity() {
    dispatch(increaseItem({ identity: "index", index: index }));
  }

  function decreaseQuantity() {
    dispatch(decreaseItem({ identity: "index", index: index }));
  }

  return (
    <>
      <div className="flex justify-between items-center pt-5">
        <div className="flex gap-2 xs:gap-1">
          <FaRegDotCircle color="green" className="h-8 xs:h-[23px] sm:pb-[8px] pb-[10px] xs:mt-1" />
          <p className="sm:text-base text-sm font-semibold">{name}</p>
        </div>
        <div className="flex sm:gap-5 gap-2">
          <div className="flex sm:gap-5 gap-3 xs:gap-2 sm:w-[100px] w-[80px] xs:w-[70px] sm:py-1 py-[2px] border-2 border-[#D4D5D9] items-center justify-center">
            <div className="cursor-pointer">
              <FaMinus className="sm:h-[12px] h-[10px] xs:h-[9px]" onClick={decreaseQuantity} />
            </div>
            <div>
              <span className="sm:text-base xs:text-xs font-medium text-[#60B246]">{quantity}</span>
            </div>
            <div className="cursor-pointer">
              <FaPlus className="sm:h-[12px] h-[10px] xs:h-[9px]" color="#60B246" onClick={increaseQuantity} />
            </div>
          </div>
          <div className="w-[70px] text-end">
            <span className="sm:text-lg text-sm sm:font-normal font-medium">{(price * quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartList;
