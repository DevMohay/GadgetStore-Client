import React from "react";
import {
  Slider,
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Pagination,
} from "@nextui-org/react";
import { phones } from "./phones";
import orengeCard from "../../assets/card/orenge.png";

function Vivo() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const sizes = ["sm"];
  // "md", "lg"
  const variants = [ "bordered", ]

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
      <section className="mainbg py-0">
        <div className="hero">
          <video src={''} autoplay controls loop></video>
        </div>
        {/* hero section close */}

        <div className="filter flex justify-between mt-10 px-10 py-5 scndbg rounded-lg items-center">
          <div className="price-range w-full">
            <Slider
              className=""
              label="Price Range"
              step={10000}
              maxValue={200000}
              minValue={10000}
              defaultValue={[10000, 200000]}
              showSteps={true}
              showTooltip={true}
              showOutline={true}
              disableThumbScale={true}
              formatOptions={{ style: "currency", currency: "BDT" }}
              tooltipValueFormatOptions={{
                style: "currency",
                currency: "BDT",
                maximumFractionDigits: 0,
              }}
              classNames={{
                base: "max-w-2xl",
                filler: "primarycolor",
                labelWrapper: "mb-2",
                label: "font-medium text-white text-medium",
                value: "font-medium text-white text-small",
                thumb: [
                  "transition-size",
                  "primarycolor",
                  "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                  "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                ],
                step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
              }}
              tooltipProps={{
                offset: 10,
                placement: "bottom",
                classNames: {
                  base: [
                    // arrow color
                    "before:primarycolor before:primarycolor before:primarycolor",
                  ],
                  content: ["py-2 shadow-xl", "text-white primarycolor"],
                },
              }}
            />
          </div>
          <div className="price-sort">
            <Dropdown backdrop="" className="scndbg">
              <DropdownTrigger>
                <Button variant="" className="scndbtn rounded-sm w-44">
                  Sort Price
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem
                  key="low-to-high"
                  classNames="scndbtn hover:bg-black"
                >
                  Price Low to High{" "}
                </DropdownItem>
                <DropdownItem key="high-to-low">Price High To Low</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center pb-[1.5rem] mt-10">
            <h1 className="text-3xl font-semibold">Vivo</h1>
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button className="capitalize scndbtn rounded-sm bg-transparent text-white w-44">
                    {selectedValue}
                  </Button>
                </DropdownTrigger>

                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                  id="dropdown"
                >
                  <DropdownItem key="text" id="dropdown-item">
                    Text
                  </DropdownItem>
                  <DropdownItem key="number" id="dropdown-item">
                    Number
                  </DropdownItem>
                  <DropdownItem key="date" id="dropdown-item">
                    Date
                  </DropdownItem>
                  <DropdownItem key="single_date" id="dropdown-item">
                    Single Date
                  </DropdownItem>
                  <DropdownItem key="iteration" id="dropdown-item">
                    Iteration
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="phones">
          <div>
            <div className="flex gap-4 flex-wrap justify-center cards">
              {phones.map((item, idx) => (
                <div
                  key={idx}
                  className=" flex flex-col w-[10.5rem] md:w-[13rem] h-[21rem] mt-3"
                >
                  <div className="card ">
                    <div className="absolute px-1 rounded-sm primarycolor text-center top-10 right-1 h-6 flex items-center  text-[.8rem]">
                      <span className="text-xl font-bold -mt-1 mr-1">৳</span>
                      {item.price}
                    </div>
                    <div className="flex flex-col justify-center card-content ">
                      <div
                        className="h-40 flex justify-center items-center  mt-1 ml-1 mr-1  bg-cover "
                        style={{ backgroundImage: `url(${orengeCard})` }}
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
        <div className="flex flex-wrap gap-4 items-center justify-center h-32">
          {sizes.map((size) => (
            <Pagination key={size} total={10} initialPage={1} size={size}  />
          ))}
        </div>
        
      </section>
    </>
  );
}

export default Vivo;
