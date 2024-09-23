import { Button } from '@nextui-org/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNavProfile() {
  return (
    <>
    <div className="text-white w-full h-full p-4 scndbg rounded-md text-md font-semibold flex flex-col gap-1 pt-8 ">
        <NavLink
          to={"/profile"}
          className="hover:bg-[#444644] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          Profile
        </NavLink>
        <NavLink
          to={"/profile/favourite-gadgets"}
          className="hover:bg-[#4f524f] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          Favourite Gadgets
        </NavLink>
        <NavLink
          to={"/profile/liked-posts"}
          className="hover:bg-[#4f524f] p-2 transition-all duration-150 rounded-md hover:scale-105 dashNav"
        >
          Liked Posts
        </NavLink>
       


       
        <Button className='w-[40%] h-8 text-center m-auto rounded-sm primarycolor text-white font-semibold text-lg'>
            Log Out
        </Button>
      </div>
    </>
  )
}

export default SideNavProfile