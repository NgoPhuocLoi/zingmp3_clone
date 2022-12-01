import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import images from "../assets/images";

const Header = () => {
  return (
    <header className="h-[70px] px-[29px] lg:px-[59px] flex items-center justify-between">
      <div className="flex mr-[10px] flex-1">
        <button className="w-[44px] text-white">
          <BsArrowLeft className="text-[24px]" />
        </button>
        <button className="w-[44px] text-white">
          <BsArrowRight className="text-[24px]" />
        </button>
        <div className="h-[40px] bg-[#ffffff1a] max-w-[440px] min-w-[300px] rounded-3xl flex items-center flex-1">
          <button className="p-2">
            <HiMagnifyingGlass className="text-[24px] text-white" />
          </button>
          <input
            className="bg-transparent outline-none caret-white text-white text-[15px] w-full"
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          />
          <button className="p-2">
            <FaTimes className="text-[20px] text-white mr-1" />
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="w-[40px] mr-[10px] cursor-pointer hover:brightness-90">
          <img
            src={images.DEFAULT_AVATAR}
            alt="avatar"
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
