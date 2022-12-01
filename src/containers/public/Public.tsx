import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSidebar, RightSidebar } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex overflow-y-auto bg-[#162a45]">
      <div className="w-[240px] bg-[#ffffff0d]">
        <LeftSidebar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="w-[330px] hidden">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Public;
