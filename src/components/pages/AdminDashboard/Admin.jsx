import React from 'react'
import SideNavAdmin from './SideNavAdmin'
import { Outlet } from 'react-router-dom'


function Admin() {
  return (
    <>
    <section className="mainbg">

        <div className="w-full flex gap-2 p-10 ">
          <div className=" w-[20%] h-[100vh] scndbg rounded-md">
           <SideNavAdmin/>
          </div>
          <div className="text-white w-[80%] min-h-screen max-h-auto p-4 scndbg rounded-md">
            
            <Outlet/>
          </div>
        </div>
    </section>
    </>
  )
}

export default Admin