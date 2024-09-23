import React from "react";
import { NavLink } from "react-router-dom";

function SideNavBar() {
  return (
    <>
      <div className="text-white w-full h-full p-4 scndbg rounded-md text-md font-semibold flex flex-col gap-1 pt-8 ">
        <NavLink
          to={"/admin-dashboard/all-products"}
          className="hover:bg-[#444644] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          All Products
        </NavLink>
        <NavLink
          to={""}
          className="hover:bg-[#4f524f] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          Edit Products
        </NavLink>
        <NavLink
          to={""}
          className="hover:bg-[#4f524f] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          All Blogs
        </NavLink>
        <NavLink
          to={""}
          className="hover:bg-[#4f524f] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          Edit Blogs
        </NavLink>
      </div>
    </>
  );
}

export default SideNavBar;
