import { TbTrash } from "react-icons/tb";

const SelectedProduct = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-6 mb-4 ">
          <h5 className="col-span-4">Item</h5>
          <h5>Quantity</h5>
          <h5>Price</h5>
        </div>
        <div className="  lg:h-[500px]md:h-[700px] flex flex-col h-[400px] overflow-y-auto overflow-x-hidden">
          <div className="bg-[#262837] px-4  rounded-xl">
            <div className="grid grid-cols-6 mb-3">
              {/*description product*/}
              <div className="flex col-span-4 items-center gap-3">
                <img src="platoFrio1.png" clasName="w-10 h-10 object-cover" />
                <div>
                  <h5 className="text-sm">Spaicy seasoned sea...</h5>
                  <p className="text-xs text-gray-500">$3000</p>
                </div>
              </div>
              <div className="text-center">
                {" "}
                <samp>2</samp>
              </div>
              <div>$6000</div>
            </div>
            <div className="grid grid-cols-6 gap-2 ">
              <form className="col-span-5 ">
                <input
                  type="text"
                  className="bg-[#1F1D2B] py-2 rounded-lg px-4  outline-none
               "
                  placeholder="Order note..."
                />
              </form>
              <div className="col-span-1 text-center">
                <button className="border border-red-500 p-2 rounded-lg">
                  {" "}
                  <TbTrash className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Submit payment */}
      <div className="bg-[#262837] w-full  absolute bottom-2 p-4 ">
        <div className="flex items-center justify-between mb-4">
          <spam clasName="text-gray-400">Discount</spam>
          <spam> $0</spam>
        </div>
        <div className="flex items-center justify-between ">
          <spam>Sub total</spam>
          <spam> $6000</spam>
        </div>
        <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded">
          Continue to payment
        </button>
      </div>
    </>
  );
};
export default SelectedProduct;
