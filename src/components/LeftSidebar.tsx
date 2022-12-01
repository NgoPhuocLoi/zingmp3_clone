import React from "react";
import { NavLink } from "react-router-dom";
import images from "../assets/images";
import { sidebarMenu } from "../utils/menu";
import { FiPlayCircle } from "react-icons/fi";

const navActiveStyle =
  "px-[25px] py-[8px] flex items-center text-[#dadada] hover:text-white border-l-[3px] bg-[#ffffff1a] border-[#3b68ef] ";
const navNonActiveStyle =
  "px-[25px] py-[8px] flex items-center text-[#dadada] hover:text-white border-l-[3px] border-transparent";

const LeftSidebar = () => {
  return (
    <div>
      <div className="h-[70px] pl-[28px] pr-[25px] flex justify-start items-center">
        <img src={images.LOGO} alt="logo" className="w-[120px] h-[40px]" />
      </div>

      <ul>
        {sidebarMenu.map((item, index) => (
          <li className="" key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? navActiveStyle : navNonActiveStyle
              }
            >
              <>
                {<item.Icon className="text-[24px] mr-[10px]" />}
                <span className="text-[14px] font-bold">{item.title}</span>
                <button className="ml-auto">
                  <FiPlayCircle className="text-[20px]" />
                </button>
              </>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
