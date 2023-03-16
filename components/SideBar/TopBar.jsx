import { BsFilterLeft } from "react-icons/bs";
import { RxAlignLeft } from "react-icons/rx";
import { HiBellAlert } from "react-icons/hi2";
import { AiFillCaretDown } from "react-icons/ai";
import { TopProfile } from "./profile";

export default function TopBar(props) {
  //bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600
  function handleClick() {
    console.log("i have been clicked");
  }

  return (
    <div
      className={`absolute top-0 py-4 w-full overflow-x-hidden  transition-all duration-300 ${
        props.stats && "pl-[270px]  pr-8"
      }`}
    >
      <div className="text-[#aaa] duration-150 font-bold flex text-3xl justify-between items-center">
        <div onClick={handleClick} className="hover:text-[#888] cursor-pointer">
          {props.stats ? <BsFilterLeft /> : <RxAlignLeft />}
        </div>
        <div className="flex items-center space-x-3">
          <HiBellAlert className="hover:text-[#888]" />
          <div className="bg-gradient-radial from-white hover:bg-[#fdfdfd] px-5 py-1 rounded-3xl duration-200 flex items-center space-x-5">
            <small className="hover:text-[#888]">
              <AiFillCaretDown />
            </small>
            <TopProfile name="Alim" departmen="Adkas" />
          </div>
        </div>
      </div>
    </div>
  );
}
