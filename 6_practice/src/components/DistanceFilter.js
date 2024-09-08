import { ResList } from "../data/Mockdata"
// import { useState } from "react";



// RatingFilter.js
export const DistanceFilter = (restaurants) => {
  return restaurants.filter(restaurant => restaurant.info.DistanceFilter < 3);
};


export default DistanceFilter;