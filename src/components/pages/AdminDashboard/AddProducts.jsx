import React from "react";
import { Outlet } from "react-router-dom";
import AddProductsCatagories from "./AddProductsCatagories";

function EditProducts() {
  return (
    <>
      <div>
        <h1 className="text-lg font-bold ">Add Products </h1>
        <div>
          <div className="catagories">
            <AddProductsCatagories />
          </div>
          <div className="add-details">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProducts;
