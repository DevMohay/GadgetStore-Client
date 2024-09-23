import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="mainbg">
        <div className="h-[60vh] m-auto flex justify-center items-center">
          <div className="scndbg form h-[22rem] w-[85%] md:w-[20rem] m-auto p-8 gap-3 rounded-md flex flex-col justify-center">
            <h1 className="font-bold text-2xl text-center mb-4 primarytext">
              Login Here
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center text-white"
            >
              <div className="">
                <Input
                  {...register("email")}
                  type="email"
                  label="Email"
                  className="rounded-none h-10 mb-4"
                />

                <Input
                  {...register("password")}
                  label="Password"
                  className="rounded-sm mb-4 h-10"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <FaEye className="text-2xl text-default-400 pointer-events-none primarytext" />
                      ) : (
                        <FaEyeSlash className="text-2xl text-default-400 pointer-events-none primarytext " />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />

                <input
                  type="submit"
                  value="LogIn"
                  className="primarycolor text-white rounded-lg flex justify-center  h-10  m-auto px-8"
                />
              </div>
            </form>
            <div className="flex justify-end gap-2 items-center">
              <span className="text-md">I'm not a User.</span>
              <span className="text-right underline text-white">
                <NavLink className="primarytext" to={"/signup"}>
                  {" "}
                  Sign Up...
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
