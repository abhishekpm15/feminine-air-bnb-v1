import React, { createContext, useState } from "react";
import { hotels } from "../data/hotels";
const ReserveContextProvider = createContext();

const ReserveContext = ({ children }) => {
  const [guests, setGuests] = useState([
    {
      id: 1,
      catogory: "Adults Age(13+)",
      count: 0,
    },
    {
      id: 2,
      catogory: "Children (Ages 2 - 12)",
      count: 0,
    },
    {
      id: 3,
      catogory: "Infant (Under 2)",
      count: 0,
    },
    {
      id: 4,
      catogory: "Pets",
      count: 0,
    },
  ]);

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
  } 


  const [date, setDate] = useState([1, 0]);
  const [month, setMonth] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [id, setId] = useState(null)
  const details = hotels.find((hotel) => hotel.id === Number(id));
  const [totalPrice, setTotalPrice] = useState(details?.price);
  const [place, setPlace] = useState()
  const [ratings, setRatings] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()

  const handleIncrement = (id) => {
    const updatedGuest = guests.map((guest) =>
      guest.id === id ? { ...guest, count: guest.count + 1 } : guest
    );
    setGuests(updatedGuest);
  };

  const handleDecrement = (id) => {
    const updatedGuest = guests.map((guest) =>
      guest.id === id
        ? { ...guest, count: guest.count === 0 ? 0 : guest.count - 1 }
        : guest
    );
    setGuests(updatedGuest);
  };

  const values = {
    handleDecrement,
    handleIncrement,
    totalPrice,
    setTotalPrice,
    id,
    setId,
    date,
    setDate,
    guests,
    setGuests,
    selectedGuests,
    setSelectedGuests,
    details,
    setMonth,
    month,
    months,
    place,
    setPlace,
    ratings,
    setRatings,
    image,
    setImage,
    description,
    setDescription
  }

  return (
    <ReserveContextProvider.Provider value = {values}>
      {children}
    </ReserveContextProvider.Provider>
  );
};

export default ReserveContext;
export {ReserveContextProvider}
