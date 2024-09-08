import RestraCard from "../RestaurantCard";
// import ResList from "../utils/mockData";
import { ResList } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [ListofRest, setListOfRestra] = useState(ResList);
  // array destructing

  // let ListofRest_js=[
  //   {
  //     "info": {
  //       "id": "151076",
  //       "name": "Captain Olive",
  //       "cloudinaryImageId": "f5f9d4821b9c667a424d971079f95815",
  //       "locality": "2nd Stage",
  //       "areaName": "BTM Layout",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American",
  //         "shawarma",
  //         "Rolls & Wraps",
  //         "Beverages",
  //         "Fast Food",
  //         "Continental"
  //       ],
  //       "avgRating": 4.5,
  //       "parentId": "21078",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "8.8K+",
  //       "sla": {
  //         "deliveryTime": 35,
  //         "lastMileTravel": 7.7,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "35-40 mins",
  //         "lastMileTravelString": "7.7 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-09-06 06:00:00",
  //         "opened": true
  //       },
  //       "badges": {

  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "textBased": {

  //           },
  //           "imageBased": {

  //           },
  //           "textExtendedBadges": {

  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹129"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {

  //           },
  //           "video": {

  //           }
  //         }
  //       },
  //       "reviewsSummary": {

  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {

  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {

  //     },
  //     "cta": {
  //       "link": "swiggy://menu?restaurant_id=151076",
  //       "text": "RESTAURANT_MENU",
  //       "type": "DEEPLINK"
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "15107",
  //       "name": "Captain Olive",
  //       "cloudinaryImageId": "f5f9d4821b9c667a424d971079f95815",
  //       "locality": "2nd Stage",
  //       "areaName": "BTM Layout",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American",
  //         "shawarma",
  //         "Rolls & Wraps",
  //         "Beverages",
  //         "Fast Food",
  //         "Continental"
  //       ],
  //       "avgRating": 3.3,
  //       "parentId": "21078",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "8.8K+",
  //       "sla": {
  //         "deliveryTime": 35,
  //         "lastMileTravel": 7.7,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "35-40 mins",
  //         "lastMileTravelString": "7.7 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2024-09-06 06:00:00",
  //         "opened": true
  //       },
  //       "badges": {

  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "textBased": {

  //           },
  //           "imageBased": {

  //           },
  //           "textExtendedBadges": {

  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹129"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {

  //           },
  //           "video": {

  //           }
  //         }
  //       },
  //       "reviewsSummary": {

  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {

  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {

  //     },
  //     "cta": {
  //       "link": "swiggy://menu?restaurant_id=151076",
  //       "text": "RESTAURANT_MENU",
  //       "type": "DEEPLINK"
  //     }
  //   }

  // ];

  const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550"
      );

      const json =await response.json();

      // setListOfRestra(json?.data.restaurants)
      const restaurants = json?.data?.success?.cards
      .filter(card => card.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      .map(card => card.gridWidget.gridElements.infoWithStyle.restaurants)
      .flat() || [];

      setListOfRestra(restaurants);

  };



  useEffect(() => {
    console.log("useEffect running");
    fetchData();
  }, []);
  


  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
  //   );

  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div className="Body">
      {/* <div className="SearchBar">Search</div> */}
      <button
        className="filter-btn"
        onClick={() => {
          // setListOfRestra()
          // console.log("button clickd");
          const filterRestra = ListofRest.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestra(filterRestra);
          // ResData[0];
          // console.log(ListofRest)
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="Res-Container">
        {/* // restraraunts card */}
        {/* <RestraCard ResData={ResList[0]}/> */}
        {/* <RestraCard ResData={ResList[1]}/>
        <RestraCard ResData={ResList[2]}/>
        <RestraCard ResData={ResList[3]}/>
        <RestraCard ResData={ResList[4]}/>
        <RestraCard ResData={ResList[5]}/>
        <RestraCard ResData={ResList[6]}/>
        <RestraCard ResData={ResList[7]}/>
        <RestraCard ResData={ResList[8]}/>
        <RestraCard ResData={ResList[9]}/>
        <RestraCard ResData={ResList[10]}/>
        <RestraCard ResData={ResList[11]}/>
        <RestraCard ResData={ResList[12]}/>
        <RestraCard ResData={ResList[13]}/>
        <RestraCard ResData={ResList[14]}/>
        <RestraCard ResData={ResList[15]}/>
        <RestraCard ResData={ResList[16]}/> */}

        {ListofRest.map((restaurant, index) => (
          <RestraCard key={index} ResData={restaurant} />
        ))}

        {/* <RestraCard ResName="Empire Foods" Cuisine="North ,SouthIndian foods" Delivery="4.4 15 Min"/>
        <RestraCard ResName="KFC" Cuisine="Fast Foods" Delivery=" 4.7 10 Min"/> */}
        {/* <RestraCard/>
        <RestraCard/>
        <RestraCard/>
        <RestraCard/> */}
      </div>
    </div>
  );
};

export default Body;
