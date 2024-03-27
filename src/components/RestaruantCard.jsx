import { RESTAURANT_IMG_URL } from "./constant";

const RestaurantCard = (props) => {

   const {info} = props;
   const {name, areaName,avgRating, cloudinaryImageId, cuisines, locality,lastMileTravel} = info;

  return (
    <div>
        <img src={`${RESTAURANT_IMG_URL}${cloudinaryImageId}`} alt="res-img" />
         
        <div>
            <span>{avgRating}</span>
            - 
            {/* <span>{locality}</span> */}

            <span>{name}</span>

            <span>{areaName}</span>

            <span>{lastMileTravel}</span>
        </div>
        <p>{cuisines.join(", ")}</p>
    </div>
  )
}

export default RestaurantCard