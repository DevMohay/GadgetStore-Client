import React from "react";
import { Outlet } from "react-router-dom";
import SideNavProfile from "./SideNavProfile";

function Profile() {
  return (
    <>
    <section className="mainbg my-0">

        <div className="w-full mainbg flex gap-2 rounded-md">
          <div className=" w-[20%] h-[100vh] scndbg rounded-md">
           <SideNavProfile/>
          </div>
          <div className="text-white w-[80%] min-h-screen max-h-auto p-4 scndbg rounded-md">
            
            <Outlet/>
          </div>
        </div>
    </section>
    </>
  );
}

export default Profile;
