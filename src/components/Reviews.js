import React from "react";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";

const Star = ({ rate }) => {
  const filledStar = "★";
  const emptyStar = "☆";

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(filledStar);
    } else {
      stars.push(emptyStar);
    }
  }

  return (
    <div className="text-xl">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
const Reviews = ({ review }) => {
  // console.log("reviews", review);
  return (
    <div>
      <Card className="mt-6 w-80 h-full shadow-xl hover:scale-110 duration-150">
        <CardBody>
          <div className="mb-2 text-xl font-semibold text-black">{review.name}</div>
          <div className="mb-2 font-semibold">{review.place}</div>
          <div className="mb-2">
            <Star rate={review.rating}/>
          </div>
          <div className="text-base">{review.description}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Reviews;
