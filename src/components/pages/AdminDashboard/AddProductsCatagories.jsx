import { Button } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";

function AddProductsCatagories() {
  return (
    <>
      <div className="w-full  h-14 flex justify-center items-center gap-4">
        <NavLink to={''} className='productCat'>
          <Button className="h-8 scndbtn bg-transparent rounded-sm text-white ">
            Phone
          </Button>
        </NavLink>
        <NavLink to={'watch'} className='productCat'>
          <Button className="scndbtn h-8 outline-blue-600 bg-transparent rounded-sm text-white ">
            Watch
          </Button>
        </NavLink>
        <NavLink to={'headphone'} className='productCat'>
          <Button className="h-8 scndbtn bg-transparent rounded-sm text-white ">
            Headphone
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default AddProductsCatagories;
