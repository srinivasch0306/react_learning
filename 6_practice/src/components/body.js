// import Card from "./Card";
// // import { ResList } from "../data/Mockdata";
// import {RatingFilter} from "./RatingFilter";
// import {useState,useEffect}from "react"


// const Body = () => {
//   // const [ListofRest,setListOfRestra]=useState()
//   const [res, setListRestra] = useState([]);

//   const fetchData = async () => {
//     const response = await fetch(
//       "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550"
//     );

//     const json =await response.json();

//     // setListOfRestra(json?.data.restaurants)
//     const restaurants = json?.data?.success?.cards
//     .filter(card => card.gridWidget?.gridElements?.infoWithStyle?.restaurants)
//     .map(card => card.gridWidget.gridElements.infoWithStyle.restaurants)
//     .flat() || [];

//     setListOfRestra(restaurants);

// };



//   useEffect(() => {
//     console.log("useEffect running");
//     fetchData();
//   }, []);


//   const filterByRating = () => {
//     const filteredList = RatingFilter(ResList); // Call the filter function
//     setListRestra(filteredList); // Update the state with filtered results
//   };




//   return (

//     <div className="Body">
//       <div className="Filter-btn"> 
//         <button className="filter" onClick={filterByRating}>Top Tated restra</button>
//       </div>
//       <div className="Rest-container">
//         {/* <Card info={ResList[0].info} /> */}
//         {/* <Card  info={ResList[1].info}/>
//         <Card  info={ResList[2].info}/>
//         <Card  info={ResList[3].info}/>
//         <Card  info={ResList[4].info}/>
//         <Card  info={ResList[5].info}/> */}

//         {/* {res.map((foreachres, index) => (
//           <Card key={index} info={foreachres.info} />
//         ))} */}
//          {res.map(restaurant => (
//           <Card key={restaurant.info.id} info={restaurant.info} />
//         ))}

//         {/* <Card Restname="burger kin />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card /> */}
//       </div>
//     </div>
//   );
// };


// export default Body;

import React, { useState, useEffect } from "react";
import Card from "./Card";
import { RatingFilter } from "./RatingFilter";

const Body = () => {
  const [res, setListRestra] = useState([]);

  // const fetchData = async () => {
  //     const response = await fetch(
  //       "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550"
  //     );
  //     const json = await response.json();

      // const restaurants = json.data.success.cards[3].gridElements.infoWithStyle.restaurants;

  //     // console.log(restaurants)
      

  // };
  const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550"
      );

      // Check if the response is OK
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      const json = await response.json();
      console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants)

      // Check if the response has the expected structure
      // const raurants = json.data.success.cards[3].gridElements.infoWithStyle.restaurants;

      setListRestra(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants)



      // console.log(raurants)

      // setListRestra(json?.data?.success?.cards[3]?.gridElements?.infoWithStyle?.restaurants)

      // console.log(setListRestra)
      // console.log(res)


  };

  useEffect(() => {
    console.log("useEffect running");
    // console.log(setListRestra)
    fetchData();
  }, []);

  const filterByRating = () => {
    const filteredList = RatingFilter(res); // Use fetched data for filtering
    setListRestra(filteredList); // Update state with filtered results
  };
  // console.log(res)

  return (
    <div className="Body">
      <div className="Filter-btn">  
        <button className="filter" onClick={filterByRating}>Top Rated Restaurants</button>
      </div>
      <div className="Rest-container">
        {res.map(restaurant => (
          <Card key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
