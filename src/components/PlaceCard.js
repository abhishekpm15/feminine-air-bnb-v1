import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { Modal } from "antd";
import SignUp from "./SignUp";
import { ModalContextProvider } from "../context/ModalContext";

const PlaceCard = ({ id, image, placeName, country, rating, price }) => {
  const navigate = useNavigate();
  const { handleOk, handleCancel, showModal } = useContext(ModalContextProvider);
  const { user } = useContext(AuthContextProvider);
  return (
    <div>
      <Modal
        title="Log in or Sign up"
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <div className="text-3xl font-semibold flex justify-center mt-10">
          Welcome to &nbsp; <span className="text-pink-300">HerStay</span>{" "}
          airbnb
        </div>

        <SignUp />
      </Modal>

      <Card
        className="w-72 shadow-2xl hover:scale-110 duration-200 cursor-pointer"
        onClick={() => {
         user ? navigate(`/hotels/${id}?place=${placeName}`) : showModal()
        }}
      >
        <CardHeader className="relative h-56">
          <img src={image} alt="card" className="h-56" />
        </CardHeader>
        <CardBody className="p-7 w-full">
          <div className="flex justify-between px-4">
            <div className="mb-2 font-semibold text-base">{placeName}</div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 flex items-center"
            >
              {rating}
              <MdOutlineStarPurple500 />
            </Typography>
          </div>
          <div className="flex px-4 mb-2">{country}</div>
          <div className="flex px-4">28 Apr - 3 May</div>
          <Typography variant="h6" color="blue-gray" className="flex px-4 mt-2">
            {price} night
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlaceCard;
