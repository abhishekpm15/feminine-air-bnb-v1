import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Diamond from "../assets/diamond.png";
import { Card } from "@material-tailwind/react";
import { ReserveContextProvider } from "../context/ReserveContext";

const ReservePage = () => {
  const {
    date,
    month,
    selectedGuests,
    place,
    ratings,
    totalPrice,
    details,
    image,
    description
  } = useContext(ReserveContextProvider);
  console.log(month, month);
  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>
      <div className="mt-5 w-full px-4">
        <div className="border-2 border-gray-300 w-full h-1"></div>
      </div>
      <div className="flex justify-center space-x-24 mt-24">

        <Card className="pb-10 shadow-2xl ring-2 ring-pink-200 hover:scale-110 duration-200">
          <div className="mx-36 mt-10">
            <div className="text-3xl font-semibold text-left">
              Confirm and Pay
            </div>
            <div className="text-xl font-normal text-left border-2 border-black/40 h-24 w-96 flex justify-center items-center mt-10 rounded-xl bg-gradient-to-r from-pink-300 to-pink-600 text-white">
              This is a rare find
              <img src={Diamond} alt="" className="w-10 ml-3"></img>
            </div>
          </div>
          <div className="mx-36 mt-10">
            <div className="text-left flex flex-col space-y-2">
              <div className="text-2xl font-bold">Your trip</div>
              <div className="text-xl font-semibold">Dates</div>
              <div className="">
                {month[1]} {date[1]} - {month[0]} {date[0]}
              </div>
            </div>
            <div className="text-left flex flex-col space-y-2 mt-5">
              <div className="text-xl font-semibold">Guests</div>
              <div className="">{selectedGuests}</div>
            </div>
          </div>
        </Card>

        <Card className="pb-10 shadow-2xl ring-2 ring-pink-200  hover:scale-110 duration-200">
          <div className="mx-36 mt-10">
            <div className="flex space-x-3">
              <div className="">
                <img src={image} alt="" className="w-48 rounded-2xl"></img>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-black text-left">{place}</div>
                <div className="text-left font-semibold">{ratings} ⭐</div>
                <div className="text-left font-semibold">{description}</div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="border-2 border-gray-300 w-full h-1"></div>
            </div>
            <div className="text-2xl font-bold text-black text-left mt-2">Price Details</div>
            <div className="flex justify-between items-center mt-7 font-bold">
              <div className="flex justify-between items-center">
                <div className="text-lg font-normal">
                  ₹{details?.price} x{" "}
                  {(date[0] - date[1] === 0 ? 1 : Math.abs(date[0] - date[1])) +
                    " nights"}
                </div>
                <div className="font-normal text-lg ">{totalPrice}</div>
              </div>
              <div>{totalPrice}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReservePage;
