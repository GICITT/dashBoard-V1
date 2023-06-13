import { RiHome6Line } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import {
  RiPieChartFill,
  RiMailLine,
  RiNotification4Line,
  RiUserSharedFill,
} from "react-icons/ri";

const NavBar = (props) => {
  const { showMenu } = props;
  return (
    <>
      <div
        className={`bg-[#1F1D2B] transition-oll fixed  lg:left-0  top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 ${
          showMenu ? "-left-full" : "left-0"
        }`}
      >
        {" "}
        <div>
          <ul className=" pl-4">
            <li>
              <h1 className="text-3xl text-gray-300 uppercase font-bold text-center my-5">
                Logo
              </h1>
            </li>
            <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-lg">
              <a
                href="#"
                className="bg-[#ec7c6a] p-4 block rounded-lg text-center flex justify-center "
              >
                <RiHome6Line className="text-2xl text-white " />
              </a>
            </li>
            <li className="hover:bg-[#262837]  p-4 rounded-tl-xl rounded-bl-lg  group">
              <a
                href="#"
                className="group group-hover:bg-[#ec7c6a] p-4 block rounded-lg text-center flex justify-center "
              >
                <ImSpoonKnife className=" group-hover:text-white text-2xl text-[#ec7c6a] " />
              </a>
            </li>
            <li className="hover:bg-[#262837]  p-4 rounded-tl-xl rounded-bl-lg  group">
              <a
                href="#"
                className="group group-hover:bg-[#ec7c6a] p-4 block rounded-lg text-center flex justify-center "
              >
                <RiPieChartFill className=" group-hover:text-white text-2xl text-[#ec7c6a] " />
              </a>
            </li>
            <li className="hover:bg-[#262837]  p-4 rounded-tl-xl rounded-bl-lg  group">
              <a
                href="#"
                className="group group-hover:bg-[#ec7c6a] p-4 block rounded-lg text-center flex justify-center "
              >
                <RiMailLine className=" group-hover:text-white text-2xl text-[#ec7c6a] " />
              </a>
            </li>
            <li className="hover:bg-[#262837]  p-4 rounded-tl-xl rounded-bl-lg  group">
              <a
                href="#"
                className="group group-hover:bg-[#ec7c6a] p-4 block rounded-lg text-center flex justify-center "
              >
                <RiNotification4Line className=" group-hover:text-white text-2xl text-[#ec7c6a] " />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="hover:bg-[#262837]  p-4 rounded-tl-xl rounded-bl-lg  group">
              <a
                href="#"
                className="group group-hover:bg-[#ec7c6a] p-4 block rounded-lg text-center flex justify-center "
              >
                <RiUserSharedFill className=" group-hover:text-white text-2xl text-[#ec7c6a] " />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
