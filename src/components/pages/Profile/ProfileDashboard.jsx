import React from "react";
import { Button } from "@nextui-org/react";
import picture from "../../../assets/Picture.jpg";

function ProfileDashboard() {
  return (
    <>
      <div className="px-10 ">
        <h1 className="text-lg font-bold mb-10">Profile</h1>
        <div className="flex gap-8  items-center">
          <div className="bg-cover flex flex-col justify-center gap-6">
            <img
              className="w-44 h-44 bg-cover rounded-full"
              src={picture}
              alt=""
            />
            <Button className=" h-8 text-center m-auto rounded-sm primarycolor text-white font-semibold text-lg">
              Change
            </Button>
          </div>
          <div>
            <h1 className="text-xl  font-bold">Mohayminul Islam</h1>
            <h1 className="">mohayminulislamakash@gmail.com</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDashboard;
