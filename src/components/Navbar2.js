// import React, { useContext } from "react";
// import Airbnb from "../assets/airbnb.jpg";
// import Woman from "../assets/woman.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ModalContextProvider } from "../context/ModalContext";

// import {
//   Menu,
//   MenuHandler,
//   MenuList,
// } from "@material-tailwind/react";
// import Search from "./Search";

// const Navbar2 = () => {
//   const {isModalOpen, handleOk, handleCancel,showModal} = useContext(ModalContextProvider)

//   return (
//     <div className="w-full mt-5">
//       <div className="flex justify-between lg:px-32 ">
//         <div className="">
//           <img src={Airbnb} alt="air-bnb" className="w-40"></img>
//         </div>
//         <Search />
//         <div className="flex mr-8 items-center ring-2 ring-pink-300 hover:shadow-xl duration-200 rounded-full h-10 my-auto space-x-2 px-2">
//           <div className="flex items-center">
//             <Menu>
//               <MenuHandler>
//                 <button>
//                   <GiHamburgerMenu />
//                 </button>
//               </MenuHandler>
//               <MenuList>
//                 <div className="hover:bg-pink-300 p-3 cursor-pointer duration-150 hover:text-white rounded-xl" onClick={showModal}>Sign up</div>
//                 <div className="hover:bg-pink-300 p-3 cursor-pointer duration-150 hover:text-white rounded-xl" onClick={showModal}>Log in</div> 
//               </MenuList>
//             </Menu>
//           </div>
//           <img src={Woman} alt="woman" className="w-6"></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar2;
