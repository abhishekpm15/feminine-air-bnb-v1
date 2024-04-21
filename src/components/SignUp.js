import React, { useContext, useState } from "react";
import Googlebutton from "../assets/Google.png";
import { Button } from "@material-tailwind/react";
import { AuthContextProvider } from "../context/AuthContext.js";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [register, setRegister] = useState("login");
  const { SignUp, SigninWithEmail, Register } = useContext(AuthContextProvider);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <>
      {register === "register" ? (
        <>
          <div className="mb-10">
            <div className="mt-5 justify-between  flex flex-col mx-10 text-sm lg:text-md">
              <div className="flex justify-center">
                <label
                  for="name"
                  className={`w-full xl:w-80 flex float-left transition duration-500 ${
                    name
                      ? "-translate-y-1 transition duration-500 w-72  text-pink-300 font-bold"
                      : "opacity-0 w-72"
                  }`}
                >
                  Name
                </label>
              </div>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => {
                  handleName(e);
                }}
                className="border-2 rounded-lg p-2 peer focus:outline-none  w-full xl:w-80 mx-auto bg-transparent border-pink-200"
                placeholder="Name"
              />
            </div>
            <div className="justify-between flex mt-3 flex-col mx-10 text-sm lg:text-md">
              <div className="flex justify-center">
                <label
                  for="mail"
                  className={`w-full xl:w-80 flex float-left transition duration-500 ${
                    email
                      ? "-translate-y-1 transition duration-500 w-72  text-pink-300 font-bold"
                      : "opacity-0 w-72"
                  }`}
                >
                  E-Mail
                </label>
              </div>
              <input
                type="text"
                name="mail"
                value={email}
                onChange={(e) => {
                  handleEmail(e);
                }}
                className="border-2 rounded-lg p-2 focus:outline-none w-full xl:w-80 mx-auto bg-transparent border-pink-200"
                placeholder="Email address"
              />
            </div>
            <div className=" justify-between flex flex-col mt-3 mx-10 mb-5 text-sm lg:text-md">
              <div className="flex justify-center">
                <label
                  for="pass"
                  className={`w-full xl:w-80 flex float-left transition duration-500 ${
                    pass
                      ? "-translate-y-1 transition duration-500 w-72 text-pink-300 font-bold"
                      : "opacity-0 w-72"
                  }`}
                >
                  Password
                </label>
              </div>
              <input
                type="text"
                name="pass"
                value={pass}
                onChange={(e) => {
                  handlePass(e);
                }}
                className="border-2 rounded-lg p-2 focus:outline-none  w-full xl:w-80  mx-auto bg-transparent border-pink-200 "
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-pink-400 p-3 rounded-xl hover:scale-110 transition duration-300 w-1/2"
                onClick={() => {
                  Register(email, pass ,name);
                }}
              >
                Register
              </Button>
            </div>
            <div className="flex justify-center text-lg mt-2 cursor-pointer">
              or
              <div className="text-pink-500 ml-1" onClick={()=>{setRegister('login')}}>
                Log in
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mb-10">
          <div className="mt-5 justify-between  flex flex-col mx-10 text-sm lg:text-md">
            <div className="flex justify-center">
              <label
                for="name"
                className={`w-full xl:w-80 flex float-left transition duration-500 ${
                  name
                    ? "-translate-y-1 transition duration-500 w-72  text-pink-300 font-bold"
                    : "opacity-0 w-72"
                }`}
              >
                Name
              </label>
            </div>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => {
                handleName(e);
              }}
              className="border-2 rounded-lg p-2 peer focus:outline-none  w-full xl:w-80 mx-auto bg-transparent border-pink-200"
              placeholder="Name"
            />
          </div>
          <div className="justify-between flex mt-3 flex-col mx-10 text-sm lg:text-md">
            <div className="flex justify-center">
              <label
                for="mail"
                className={`w-full xl:w-80 flex float-left transition duration-500 ${
                  email
                    ? "-translate-y-1 transition duration-500 w-72  text-pink-300 font-bold"
                    : "opacity-0 w-72"
                }`}
              >
                E-Mail
              </label>
            </div>
            <input
              type="text"
              name="mail"
              value={email}
              onChange={(e) => {
                handleEmail(e);
              }}
              className="border-2 rounded-lg p-2 focus:outline-none w-full xl:w-80 mx-auto bg-transparent border-pink-200"
              placeholder="Email address"
            />
          </div>
          <div className=" justify-between flex flex-col mt-3 mx-10 mb-5 text-sm lg:text-md">
            <div className="flex justify-center">
              <label
                for="pass"
                className={`w-full xl:w-80 flex float-left transition duration-500 ${
                  pass
                    ? "-translate-y-1 transition duration-500 w-72 text-pink-300 font-bold"
                    : "opacity-0 w-72"
                }`}
              >
                Password
              </label>
            </div>
            <input
              type="text"
              name="pass"
              value={pass}
              onChange={(e) => {
                handlePass(e);
              }}
              className="border-2 rounded-lg p-2 focus:outline-none  w-full xl:w-80  mx-auto bg-transparent border-pink-200 "
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-pink-400 p-3 rounded-xl hover:scale-110 transition duration-300 w-1/2"
              onClick={() => {
                SigninWithEmail(email, pass);
              }}
            >
              Login
            </Button>
          </div>
          <div className="flex justify-center text-lg mt-2 cursor-pointer">
            or
            <div className="text-pink-500 ml-1" onClick={()=>{setRegister('register')}}>
              Register
            </div>
          </div>
          <div className="w-full flex justify-center mt-5">
            <div
              className="flex h-16 items-center border-2 border-gray-500 rounded-md w-96 cursor-pointer hover:shadow-2xl duration-300 justify-center"
              onClick={SignUp}
            >
              <img
                src={Googlebutton}
                alt="googlebutton"
                className="cursor-pointer"
              />
              Sign In with Google
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
