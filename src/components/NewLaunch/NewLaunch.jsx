import React from "react";
import blueCard from "../../assets/card/blue.png";
import { phones } from "../Phones/phones.js";
import { Button } from "@nextui-org/react";

function NewLaunch() {
  onmousemove = (event) => {
    const cards = document.querySelectorAll(".card");
    const wrapper = document.querySelector(".cards");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--xPos", `${x}px`);
      card.style.setProperty("--yPos", `${y}px`);
    });
  };
  return (
    <>
      <section className="mainbg ">
        <div>
          <div className="flex justify-between pb-14">
            <h1 className="text-3xl font-semibold">New Launches</h1>
            <button className="scndbtn rounded-md px-2 text-sm">
              View More
            </button>
          </div>
          <div className="flex gap-4 flex-wrap justify-center cards">
            {phones.map((item, idx) => (
              <div
                key={idx}
                className=" flex flex-col w-[10.5rem] md:w-[13rem] h-[21rem] mt-3"
              >
                <div className="card ">
                  <div className="absolute px-1 rounded-sm primarycolor text-center top-10 right-1 h-6 flex items-center  text-[.8rem]">
                    <span className="text-xl font-bold">৳</span>{item.price}
                  </div>
                  <div className="flex flex-col justify-center card-content ">
                    <div
                      className="h-40 flex justify-center items-center  mt-1 ml-1 mr-1  bg-cover "
                      style={{ backgroundImage: `url(${blueCard})` }}
                    >
                      <img src={item.image} alt="" className="p-6 md:p-12" />
                    </div>
                    <div className="flex bg-gradient-to-b from-gray-600 to-transparent rounded-t-2xl mx-1 -mt-3">
                      <div className="left w-1/2 px-2 ">
                        <div className="flex flex-col">
                          <h1 className="text-md md:text-xl font-bold pt-2 md:pt-4 lg:pt-4 ">
                            {item.name}
                          </h1>
                          <h1 className="pt-1 text-sm  font-semibold">
                            Display
                          </h1>
                          <p className="text-[10px] line2">
                            {item.displayType}
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-700 w-[2px] h-full m-1 mt-3 "></div>

                      <div className="right w-1/2 px-1 pt-3 ">
                        <h1 className="text-sm font-semibold">Storage</h1>
                        <p className="text-[10px] line1 ">{item.memory}</p>
                        <h1 className="text-sm font-semibold">RAM </h1>
                        <p className="text-[10px] line1 ">{item.ram}</p>
                        <h1 className="text-sm font-semibold">CPU </h1>
                        <p className="text-[10px] line1 ">{item.chipset}</p>
                        <h1 className="text-sm font-semibold">Battery </h1>
                        <p className="text-[10px] line1 ">{item.battery}</p>
                      </div>
                    </div>

                      <Button className=" primarycolor text-white w-32 flex justify-center items-center rounded-md px-2 text-center m-auto h-10 ">
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewLaunch;
