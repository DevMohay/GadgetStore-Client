import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function AddWatch() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Apple"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <div>
        <h1 className="text-lg font-bold ">Add Watch</h1>
        <div className="flex gap-4 w-full">
          <div className="photo bdr w-[40%]"></div>
          <div className="detail  w-[60%]">
            <form action="">
              <div>
                <Input
                  type="text"
                  variant="underlined"
                  label="Name"
                  className="input-text"
                  color=""
                />

                <div className="flex gap-4 items-center relative">
                  {/* brand name dropdown  */}
                  <div className="absolute bottom-0 ">
                    <Dropdown className="">
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          className="capitalize text-white rounded-sm "
                        >
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
                        <DropdownItem key="Apple">Apple</DropdownItem>
                        <DropdownItem key="Samsung">Samsung</DropdownItem>
                        <DropdownItem key="Xiaome">Xiaome</DropdownItem>
                        <DropdownItem key="Realme">Realme</DropdownItem>
                        <DropdownItem key="Oppo">Oppo</DropdownItem>
                        <DropdownItem key="Vivo">Vivo</DropdownItem>
                        <DropdownItem key="Infinix">Infinix</DropdownItem>
                        <DropdownItem key="Techno">Techno</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Input
                    type="text"
                    variant="underlined"
                    label="Price"
                    className="ml-10 pl-20"
                    color=""
                  />
                </div>

                <Input
                  type="text"
                  variant="underlined"
                  label="Model Name"
                  color=""
                />
                <Input
                  type="text"
                  variant="underlined"
                  label="App Support"
                  color=""
                />

                <div className="flex gap-4">
                  <Input
                    type="text"
                    variant="underlined"
                    label="Connectivity"
                    color=""
                  />
                  <Input
                    type="text"
                    variant="underlined"
                    label="Water Resistance"
                    color=""
                  />
                </div>

                <Input
                  type="text"
                  variant="underlined"
                  label="Battery"
                  color=""
                />
                <Textarea
                  variant="underlined"
                  label="Other Feature/Info"
                  labelPlacement="outside"
                  placeholder="Enter All the Feature"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0 rounded-sm"
                  color=""
                />
              </div>
              <div className="w-full flex justify-center mt-4">
                <Button className="rounded-sm h-8 primarycolor text-white">
                  <input type="submit" value="" />
                  Add Product
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddWatch;
