import { BsChevronDoubleLeft } from "react-icons/bs";
import { DateTime } from "../DateTime";
import { SideProfile, TopProfile } from "./profile";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import SideList from "./SideList";

export default function SideBar(props) {
  function handleClick() {
    console.log("i have been clicked");
  }

  return (
    <aside>
      <div className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-400 shadow-md shadow-cyan-600 fixed left-0 w-[250px] h-full p-5 space-y-4 overflow-x-hidden scrollbar-none">
        <div className="flex justify-between">
          <Link
            className="w-10 h-10 hover:bg-white hover:rounded-xl text-white hover:text-blue-700 text-2xl flex justify-center items-center duration-300"
            href="/"
          >
            <IoHome />
          </Link>
          <div
            className="w-10 h-10 sm:hidden font-bold hover:bg-white hover:shadow-sm hover:shadow-slate-800 hover:rounded-xl text-white hover:text-blue-700 text-2xl flex justify-center items-center duration-300"
            onClick={handleClick}
          >
            <BsChevronDoubleLeft />
          </div>
        </div>
        <div className="flex justify-center mt-8 text-center text-white">
          <SideProfile name="Muhammad Alim" departmen="Adkas" />
        </div>
        <div className="text-white text-center border-t border-white border-b my-5 py-2">
          <DateTime />
        </div>
        <SideList />
      </div>
    </aside>
  );
}
