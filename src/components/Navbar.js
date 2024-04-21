import React, { useContext } from "react";
import Airbnb from "../assets/airbnb.jpg";
import Woman from "../assets/woman.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalContextProvider } from "../context/ModalContext";
import {
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";


const Navbar = () => {
  const {showModal} = useContext(ModalContextProvider)
  const {user, SignOut} = useContext(AuthContextProvider)
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex justify-between lg:px-32 ">
        <div className="cursor-pointer" onClick={()=>{navigate('/')}}>
          <img src={Airbnb} alt="air-bnb" className="w-40" ></img>
        </div>
        <div className="list-none px-4 py-2 hidden sm:flex items-center">
          <li className="flex space-x-5 text-base font-medium ">
            <ul className="hover:bg-pink-300 hover:shadow-xl py-2 px-4 hover:text-white  duration-200 rounded-2xl cursor-pointer">
              Stays
            </ul>
            <ul className="hover:bg-pink-300 hover:shadow-xl py-2 px-4 hover:text-white  duration-200 rounded-2xl cursor-pointer">
              Experiences
            </ul>
            <ul className="hover:bg-pink-300 hover:shadow-xl py-2 px-4 hover:text-white  duration-200 rounded-2xl cursor-pointer">
              Online Experiences
            </ul>
          </li>
        </div>
        <div className="flex mr-8 items-center ring-2 ring-pink-300 hover:shadow-xl duration-200 rounded-full h-10 my-auto space-x-2 px-2">
          <div className="flex items-center">
            <Menu>
              <MenuHandler>
                <button>
                  <GiHamburgerMenu />
                </button>
              </MenuHandler>
              {
                user ? 
                <>
                <MenuList>
                  <div className="hover:bg-pink-300 p-3 cursor-pointer duration-150 hover:text-white rounded-xl border-2 border-black/30 outline-none" onClick={SignOut}>Sign out</div>
                </MenuList> </> 
                
                : 
                <>
                <MenuList>
                  <div className="hover:bg-pink-300 p-3 cursor-pointer duration-150 hover:text-white rounded-xl border-2 mb-2 border-black/30 outline-none" onClick={showModal}>Sign up</div>
                  <div className="hover:bg-pink-300 p-3 cursor-pointer duration-150 hover:text-white rounded-xl border-2  border-black/30 outline-none" onClick={showModal}>Log in</div> 
                </MenuList></>
              }
  
            </Menu>
          </div>
          {
            user ? <><img src={user.photoURL} alt="" className="w-6 rounded-full"></img></> : <><img src={Woman} alt="woman" className="w-6 rounded-full"></img></>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
