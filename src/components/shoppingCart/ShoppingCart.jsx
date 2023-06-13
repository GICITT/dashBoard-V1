import { GoX } from "react-icons/go";
import SelectedProduct from "../SelectedProduct/SelectedProduct";

const ShoppingCart = ({ toggleOrder }) => {
  return (
    <div className="relative pt-16 text-gray-300 h-full ">
      <GoX
        onClick={toggleOrder}
        className="absolute lef-0 p-3 box-content text-gray-300 rounded-full left-4 top-4 text-xl bg-[#262837]"
      />
      <h1 className="text-2xl mt-4 my-1">Orders #142543</h1>
      <div className="flex items-center gap-4 flex-wrap">
        {/*Botones */}
        <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
          Dine in
        </button>
        <button className=" text-[#ec7c6a] border  border-gray-400 py-2 px-4 rounded-xl">
          To go
        </button>
        <button className="text-[#ec7c6a] border border-gray-400 py-2 px-4 rounded-xl">
          Delivery
        </button>
      </div>
      {/*selected product */}
      <div>
        <SelectedProduct />
      </div>
    </div>
  );
};

export default ShoppingCart;
