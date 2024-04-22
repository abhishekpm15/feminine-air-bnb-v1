import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Card, Button } from "@material-tailwind/react";
import { ReserveContextProvider } from "../context/ReserveContext";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Animation from "../assets/animation.json";
import { Modal } from "antd";

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
    description,
    hotelDetail,
  } = useContext(ReserveContextProvider);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () =>{
    setTimeout(()=>{
      showModal()
    },2000)
    setTimeout(()=>{
      window.location.replace("/")
    },5000)
  }

  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>
      <div className="mt-5 w-full px-4">
        <div className="border-2 border-gray-300 w-full h-1"></div>
      </div>
      <div className="flex justify-center space-x-24 mt-24">
        <div className="text-3xl font-semibold text-left text-black">
          ➤ Confirm and Pay
        </div>
        <Card className="pb-10 shadow-2xl ring-2 ring-pink-200 hover:scale-110 duration-200">
          <div className="mx-36 mt-10">
            <div className="flex space-x-3">
              <div className="">
                <img src={image} alt="" className="w-80 rounded-2xl"></img>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-black text-left">{place}</div>
                <div className="text-left font-semibold">{ratings} ⭐</div>
                <div className="text-left font-semibold">{description}</div>
                <div className="text-left font-semibold">{hotelDetail}</div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="border-2 border-gray-300 w-full h-1"></div>
            </div>
            <div className="text-left flex flex-col space-y-2 mt-2">
              <div className="text-2xl font-bold text-black">Your trip</div>
              <div className="flex items-center">
                <div className="text-xl font-semibold ml-10 w-28">
                  ✅ Dates :{" "}
                </div>
                <div className="ml-10 font-semibold">
                  {month[1]} {date[1]} - {month[0]} {date[0]}
                </div>
              </div>
              <div className="text-left flex items-center space-x-10 ml-10">
                <div className="text-xl font-semibold w-28">✅ Guests :</div>
                <div className="text-left font-semibold">{selectedGuests}</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-black text-left mt-5">
              Price Details
            </div>
            <div className="flex justify-between items-center mt-2 font-bold">
              <div className="flex justify-between items-center">
                <div className="text-lg font-normal">
                  ₹{details?.price} x{" "}
                  {(date[0] - date[1] === 0 ? 1 : Math.abs(date[0] - date[1])) +
                    " nights"}
                </div>
              </div>
              <div>{totalPrice}</div>
            </div>
          </div>
          <div className="mt-5">
            <Button className="bg-blue-400" onClick={handleConfirm}>
              Confirm Booking
            </Button>
          </div>
          <div>
            <Modal
              title="Transaction successful, You will redirect to Home page"
              open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            >
              <Player
                autoplay
                loop
                src={Animation}
                style={{ height: "300px", width: "300px" }}
              >
                <Controls visible={false} />
              </Player>
            </Modal>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReservePage;
