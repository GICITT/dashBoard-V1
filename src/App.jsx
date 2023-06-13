import { useState } from "react";

import {
  IoAccessibilitySharp,
  IoReorderFourOutline,
  IoAdd,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { RiPieChartFill } from "react-icons/ri";
import NavBar from "./components/shared/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);

    if (showOrder) {
      setShowMenu(false);
    }
  };

  return (
    <CartContextProvider>
      <div className="bg-[#262837] w-full min-h-screen">
        <NavBar showMenu={showMenu} />
        {/* Menu movil */}
        <nav className="bg-[#1F1D2B] rounded-tl-xl rounded-tr-xl rounded lg:hidden  fixed w-full bottom-0 left-0 text-gray-300 p-2 px-8 flex items-center justify-between">
          {" "}
          <button>
            <IoAccessibilitySharp />
          </button>
          <button>
            <IoAdd />
          </button>
          <button>
            <RiPieChartFill onClick={toggleOrder} />
          </button>
          <button onClick={toggleMenu} className="text-white bg-red-300 p-2">
            {showMenu ? <IoReorderFourOutline /> : <HiOutlineX />}
          </button>
        </nav>
        <main className="   lg:pl-32 lg:pl-28  pb-20 grid grid-cols-1 lg:grid-cols-8 p-4 mb-16">
          <div className=" p-8 lg:col-span-6 md:p-8">
            {/*Header*/}
            <header className="p-4">
              {/*Title and search*/}
              <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
                <div>
                  <h1 className="text-2xl text-gray-300"> Jeager Resto</h1>
                  <p className="text-gray-400">07 junio 2023</p>
                </div>
                <form>
                  <div className="w-full relative ">
                    <HiOutlineMagnifyingGlass className="text-gray-300 absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                      className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              {/*Tabs*/}
              <nav className=" md:gap-8 md:justify-start mb-6 text-gray-300 flex items-center justify-betweem border-b">
                <a
                  href="#"
                  className=" text-[#ec7c6a] relative py-2 before:rounded-full before:bottom-[1px] before:h-[2px] py-2 pr-4 before:w-1/2 before:h-2 before:absolute before:bg-[#ec7c6a]  before:left-0"
                >
                  Hot dishes
                </a>
                <a href="#" className=" py-2 pr-4 ">
                  Cold dishes
                </a>
                <a href="#" className=" py-2 pr-4 ">
                  Soup
                </a>
                <a href="#" className=" py-2 pr-4 ">
                  Grill
                </a>
              </nav>
            </header>
            {/*Tilte content*/}
            <div className="flex items-center justify-between p-4 mb-16">
              <h2 className=" text-xl text-gray-300">Chose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] rounded-lg py-2 px-4">
                {" "}
                <IoIosArrowDown />
                Dine in
              </button>
            </div>
            {/*Content*/}
            <div>
              {/*Card*/}
              <ItemListContainer />
            </div>
          </div>
          <div
            className={`w-full h-full max-h-screen lg:w-96 lg:right-0  top-0 bg-[#1F1D2B] lg:col-span-2 rigtht-0 fixed lg:static  ${
              showOrder ? "right-0" : "-right-full"
            } `}
          >
            <ShoppingCart toggleOrder={toggleOrder} />
          </div>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
