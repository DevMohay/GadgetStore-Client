import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const onSubmit = async (data) => {
    await delay (3)
    console.log(data);
  }

  const delay =(d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000); 
    })

  }
  return (
    <>
      <section className="mainbg">
        <div className="h-[60vh] m-auto flex justify-center items-center">
          <div className="scndbg form h-[25rem] w-[85%] md:w-[20rem] m-auto p-8 gap-3 rounded-md flex flex-col justify-center">
            <h1 className="font-bold text-2xl text-center mb-4 primarytext">
              Signup Here
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center  w-full "
            >
              <div className="w-64 text-black gap-2 flex flex-col">
                <Input
                  {...register("name")}
                  autocomplete="off"
                  type="name"
                  label="Name"
                  className="h-10 text-black"
                />

                <Input
                  {...register("email")}
                  autocomplete="off"
                  type="email"
                  label="Email"
                  className="h-10"
                />

                <Input
                  {...register("password")}
                  label="Password"
                  className="rounded-sm h-10"
                  type="password"
                />

                {/* <Input
                  {...register("password")}
                  label="Confirm Password"
                  className="rounded-sm mb-4 h-10"
                  type="password"
                  name="confirm_password"
                /> */}

                <input
                  disabled={isSubmitting}
                  type="submit"
                  value="Submit"
                  className="primarycolor text-white rounded-lg flex justify-center  h-10  m-auto px-8"
                />
              </div>
                {isSubmitting && <div className="absolute flex justify-center h-[9rem] w-[9rem]
                bg-black z-50"><h1 className="text-white text-center m-auto">Loading...</h1></div>}
            </form>

            <div className="flex justify-end gap-2 items-center">
              <span className="text-md">I'm a User.</span>
              <span className="text-right underline text-white">
                <NavLink className="primarytext" to={"/login"}>
                  {" "}
                  LogIn...
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
