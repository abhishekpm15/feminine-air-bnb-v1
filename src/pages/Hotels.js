import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Select, Card, Button } from "@material-tailwind/react";
import { DatePicker, Space } from "antd";
import { ReserveContextProvider } from "../context/ReserveContext";
import { useParams, useSearchParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;

const Hotels = () => {
  const {
    handleDecrement,
    handleIncrement,
    totalPrice,
    setTotalPrice,
    date,
    setDate,
    guests,
    details,
    id,
    setId,
    selectedGuests,
    setMonth,
    setSelectedGuests,
    months,
    setPlace,
    setRatings,
    setDescription,
    setImage
  } = useContext(ReserveContextProvider);

  const { id: paramsId } = useParams();
  const [searchParams] = useSearchParams();
  const place = searchParams.get("place");

  useEffect(() => {
    setId(paramsId);
    setPlace(place)
    setRatings(details?.ratings)
    setImage(details?.images[0])
    setDescription(details?.description)
  }, [details?.description, details?.images, details?.ratings, id, paramsId, place, setDescription, setId, setImage, setPlace, setRatings]);

  useEffect(() => {
    const handleValue = () => {
      const value = guests.filter((guest) => guest.count > 0);
      let res = "";
      value.map(
        (value) =>
          (res += value.catogory.split(" ")[0] + " - " + value.count + " , ")
      );
      const number = parseFloat(details?.price.replace(/,/g, ""));
      const price = number * Math.abs((date[0] - date[1]));
      const realPrice = price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
      setTotalPrice(realPrice);
      return setSelectedGuests(res);
    };

    handleValue();
  }, [date, details?.price, guests, setSelectedGuests, setTotalPrice]);

  const handleChange = (e) => {
    setDate([e[0].$D, e[1].$D]);
    setMonth([months[e[0].$M], months[e[1].$M]])
    console.log(e)
  };

  useEffect(() => {
    console.log(date);
  }, [date]);

  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <Navbar />
      <div className="text-3xl font-medium flex items-start mx-64 px-28 mt-5 mb-3">
        {place.toUpperCase()}
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <div className="flex space-x-2">
          <div>
            <img
              src={details?.images[0]}
              alt=""
              className="w-[600px] rounded-l-3xl h-[520px] hover:brightness-75 cursor-pointer"
            ></img>
          </div>
          <div className="flex flex-col items-center justify-evenly space-y-1">
            <div className="flex  space-x-2">
              <div>
                <img
                  src={details?.images[1]}
                  className="w-72 h-64  object-cover hover:brightness-75 cursor-pointer"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={details?.images[2]}
                  className="w-72 h-64 object-cover hover:brightness-75 cursor-pointer"
                  alt=""
                />
              </div>
            </div>

            <div className="flex  space-x-2">
              <div>
                <img
                  src={details?.images[3]}
                  className="w-72  h-64 object-cover hover:brightness-75 cursor-pointer"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={details?.images[4]}
                  className="w-72  h-64 object-cover hover:brightness-75 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-64 px-28 mt-5 mb-3 flex-col items-start">
        <div className="font-semibold text-xl mt-1">{details?.description}</div>
        <div className="text-lg mt-1">{details?.details}</div>
        <div className="flex space-x-3 items-center mt-1">
          <div className="text-base font-semibold flex items-center gap-4">
            ★ {details?.ratings}
          </div>
          <span className="text-base font-semibold cursor-pointer underline">
            {details?.reviews.length} reviews
          </span>
        </div>
        <div className="mt-5 w-full">
          <div className="border-2 border-gray-300 w-full h-1"></div>
        </div>
        <div className="flex justify-between w-full mt-5">
          <div className="">
            <div className="text-2xl font-semibold">What this place offers</div>
            <div className="text-lg text-left mt-5 font-normal">
              {details?.offers.map((detail) => {
                return (
                  <div
                    className={`mt-2 ${
                      detail[0] === "!" ? "line-through" : ""
                    }`}
                  >
                    ✨ {detail[0] === "!" ? detail.slice(1) : detail}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 w-full">
              <div className="border-2 border-gray-300 w-full h-1"></div>
            </div>
            <div className="text-2xl font-medium text-left mt-10">Average {details?.ratings} ⭐ </div>
            <div className="text-2xl font-semibold text-left mt-2">{details?.reviews.length} reviews</div>
            <div className="text-base text-left grid grid-cols-2 w-full gap-10">
              {details?.reviews.map((review) => {
                return <Reviews review={review} />;
              })}
            </div>
          </div>
          <div>
            <Card className="mt-6 w-96 h-[500px] shadow-2xl mb-10">
              <div className="text-2xl font-medium flex justify-start p-8">
                ₹ {details?.price} night
              </div>

              <Space direction="vertical" className="w-80 mx-auto">
                <RangePicker
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Space>
              <div className="flex justify-center">
                <div className="w-80 mt-5">
                  <Select label="Guests" value={selectedGuests}>
                    <div className="flex flex-col w-full space-y-3">
                      {guests.map((guest) => {
                        return (
                          <div className="">
                            <div className="flex items-center justify-between hover:bg-gray-300 rounded-lg cursor-pointer px-2 py-2">
                              <div className="font-semibold">
                                {guest.catogory}
                              </div>
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => {
                                    handleDecrement(guest.id);
                                  }}
                                  className=" p-2 text-black rounded-full border-2 hover:border-black"
                                >
                                  -
                                </button>
                                <div>{guest.count}</div>
                                <button
                                  onClick={() => {
                                    handleIncrement(guest.id);
                                  }}
                                  className=" p-2 text-black rounded-full border-2 hover:border-black"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Select>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-5 mb-5">
                <Button className="bg-pink-400 text-xl text-white p-4 w-64" onClick={()=>{navigate('/reserve')}}>
                  Reserve
                </Button>
              </div>
              <div>You won't be charged yet</div>
              <div className="flex justify-between items-center mx-10 mt-7">
                <div className="text-lg font-normal">
                  ₹{details?.price} x{" "}
                  {(date[0] - date[1] === 0 ? 1 : Math.abs(date[0] - date[1])) +
                    " nights"}
                </div>
                <div className="font-normal text-lg ">{totalPrice}</div>
              </div>
              <div className="mt-5 w-full px-4">
                <div className="border-2 border-gray-300 w-full h-1"></div>
              </div>
              <div className="flex justify-between items-center mx-10 mt-7 font-semibold">
                <div>Total before taxes</div>
                <div>{totalPrice}</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotels;
