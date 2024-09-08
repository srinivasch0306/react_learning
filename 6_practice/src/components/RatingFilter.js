// import { ResList } from "../data/Mockdata"
// import { useState } from "react";



// RatingFilter.js
export const RatingFilter = (restaurants) => {
  return restaurants.filter(restaurant => restaurant.info.avgRating > 4);
};


export default RatingFilter;