const RestraCard = (props) => {
  // console.log(props);
  const {ResData}=props;
  return (
    <div className="Res-Card">
      <img
        className="meghana"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+ResData.info.cloudinaryImageId}
      ></img>

      <div className="name">
      <h1>{ResData.info.name}</h1>
      <h3><span class="fa fa-star checked"></span>{ResData.info.avgRating} {ResData.info.deliveryTime}</h3>
        <p>{ResData.info.cuisines.join(",")}</p>
        <p>{ResData.info.costForTwo}</p>
      </div>
    </div>
  );
};


export default RestraCard;