import React from "react";
import { phones } from "../Phones/phones";
import pinkCard from "../../assets/card/pink.png";
import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";

function HotPhones() {
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
            <h1 className="text-3xl font-semibold">Hot Phones</h1>
            <div className="flex gap-4 ">
              <NavLink to={"/apple"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff] transition-all duration-150">
                  Apple
                </button>
              </NavLink>
              <NavLink to={"/samsung"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff] transition-all duration-150">
                  Samsung
                </button>
              </NavLink>
              <NavLink to={"/xiaome"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e4fff] transition-all duration-150">
                  Xiaomi
                </button>
              </NavLink>
              <NavLink to={"/realme"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff] transition-all duration-150">
                  Realme
                </button>
              </NavLink>
              <NavLink to={"/vivo"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff] transition-all duration-150">
                  Vivo
                </button>
              </NavLink>
              <NavLink to={"/oppo"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff] transition-all duration-150">
                  Oppo
                </button>
              </NavLink>
              <NavLink to={"/tecno"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff]">
                  Tecno
                </button>
              </NavLink>
              <NavLink to={"/infinix"}>
                <button className="scndbtn rounded-md px-2 text-sm hover:bg-[#1e50ff] transition-all duration-150">
                  Infinix
                </button>
              </NavLink>
            </div>
          </div>
          <div>
            <div className="flex gap-4 flex-wrap justify-center cards">
              {phones.map((item, idx) => (
                <div
                  key={idx}
                  className=" flex flex-col w-[10.5rem] md:w-[13rem] h-[21rem] mt-3"
                >
                  <div className="card ">
                    <div className="absolute px-1 rounded-sm primarycolor text-center top-10 right-1 h-6 flex items-center  text-[.8rem]">
                      <span className="text-xl font-bold">৳</span>
                      {item.price}
                    </div>
                    <div className="flex flex-col justify-center card-content ">
                      <div
                        className="h-40 flex justify-center items-center  mt-1 ml-1 mr-1  bg-cover "
                        style={{ backgroundImage: `url(${pinkCard})` }}
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
        </div>
        <div className="flex justify-center mt-10">
          <Button
            color=""
            variant="light"
            className="outline-1 outline-blue-600 hover:bg-blue-600 border-0 rounded-sm "
          >
            View More
          </Button>
        </div>
      </section>
    </>
  );
}

export default HotPhones;
