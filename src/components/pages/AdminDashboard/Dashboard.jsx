import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNavBar from "./SideNavBar";
import AllProducts from "./AllProducts";

function Dashboard() {
  return (
    <>
    
      <section className="mainbg flex gap-2 rounded-md">
        <div className=" w-[20%] h-[80vh] scndbg">
          <SideNavBar/>
        </div>
        <div className="text-white w-[80%]  p-4 scndbg rounded-md">
        <AllProducts/>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
