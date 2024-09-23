import React from "react";
import { phones } from "../../Phones/phones";

function FavouriteGadget() {
  return (
    <>
      <div>
        <h1 className="text-lg font-bold mb-10">My Favourite Gadgets</h1>
        <div>
          {phones.map((item, i) => (
            <div key={i} className="flex gap-4">
              <img src={item.image} alt="" className="w-32 gap-4 mb-4" />
              <div className="py-4 w-full mb-4">
                <h1 className="font-bold ">{item.name}</h1>
                <div>
                  <h1 className="text-sm">
                    Display: <span> {item.displaySize}</span>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FavouriteGadget;
