import React, { useContext } from "react";
import PlaceCard from "./PlaceCard";
import { SearchContextProvider } from "../context/SearchContext";
import { Modal } from "antd";
import { ModalContextProvider } from "../context/ModalContext";
import SignUp from "./SignUp";

const Places = () => {
  const { places } = useContext(SearchContextProvider);
  const { isModalOpen, handleOk, handleCancel } = useContext(ModalContextProvider);
  return (
    <div className="w-full flex justify-center mt-20">
      <>
        <Modal
          title="Log in or Sign up"
          open={isModalOpen}
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
      </>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-20 gap-x-10">
        {places.map((data,index) => {
          return (
            <PlaceCard
              key={index}
              id={data.id}
              image={data.image}
              placeName={data.placeName}
              country={data.country}
              rating={data.ratings}
              price={data.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Places;
