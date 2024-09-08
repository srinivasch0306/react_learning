//  import {cdn_link} from "../data/Mockdata";
//  import React from 'react';

// //  import { ResList } from "../data/Mockdata";

//  const Card = ({ info }) => {
//   // const {RestData}=props;
//   return (
//     <div className="Rest-card">
//       <img
//         className="image"
//         src={
//           cdn_link+
//           info.cloudinaryImageId
//         }
//       />
      // <h4 className="Name">{info.name}</h4>
      // <div className="Cusinie">
      //   <p className="cus">{info.cuisines.join(" , ")}</p>
      //   <p className="cus">{info.avgRating} ⭐</p>
      //   <p className="cus">{info.sla.deliveryTime} min 🚚 </p>
      //   <p className="cus">{info.sla.lastMileTravelString}</p>
      // </div>
//     </div>
//   );
// };


// export default Card;
import React from 'react';
import Body from './body';

const Card = ({ info }) => {
  return (
    <div className="Rest-card">
      <img
        className="image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
        // src={info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}` : "default-image-url.jpg"}
        alt={info.name}
      />
      <h4 className="Name">{info.name}</h4>
      {/* <h4 className="Name">{info.name}</h4> */}
      <div className="Cusinie">
        {/* {/* <p className="cus">{info.cuisines.join(",")}</p> */}
        <p className="cus">{info.avgRating} ⭐</p>
        <p className='cus'>{info.areaName}</p>
        <p className="cus">{info.sla.deliveryTime} min 🚚 </p>
        <p className="cus">{info.sla.lastMileTravelString}</p> 
      </div>
    </div>
  );
};

export default Card;
