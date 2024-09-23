import React from "react";
import Picture from "./../assets/Picture.jpg";
import logo from "./../assets/logo.png";
import { FaOpencart, FaSearch } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="mainbg px-4 md:px-10 lg:px-20 pt-4  justify-between w-full z-50 pb-4 ">
        <div className="flex justify-between items-center">
          <NavLink to={"/"}>
            <div className="logo w-32">
              <img src={logo} alt="" />
            </div>
          </NavLink>
          <div className="searce">
            <div className="relative ">
              <input
                type="text"
                className="bg-slate-50 rounded-full text-black px-2 h-8"
              />
              <FaSearch
                className="absolute top-2 right-2 text-black
              text-lg"
              />
            </div>
          </div>
          <div className="right flex items-center gap-4 ">
            <NavLink to={'/profile'}>
              <div className="flex items-center gap-2">
                <img src={Picture} alt="" className="w-10 rounded-full" />
                <h1>User Name</h1>
              </div>
            </NavLink>
            <div className="relative">
              <FaOpencart className="text-2xl " />
              <span className="absolute -top-4 -right-1 text-[14px] p-[2px] primarycolor rounded-md text-white">
                10
              </span>
            </div>
            <NavLink to={"/login"}>
              <Button className=" text-white primarycolor h-8 rounded-md text-sm flex items-center gap-1  ">
                Login
                <IoMdLogIn />
              </Button>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
