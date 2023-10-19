import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "../components/Shimmer"
import useRestaurantMenu from '../assets/useRestaurantMenu';

function RestraMenu() {  
    
   const {resId} = useParams()
   
   //used custom Hook
   const restraMenu = useRestaurantMenu(resId)
    
    if (restraMenu === null) return <Shimmer />

    const {name, city, cuisines, avgRating, costForTwoMessage} = restraMenu?.cards[0]?.card?.card?.info;
    
    const {itemCards} = restraMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)

  return  (
    <div>
       <h1>{name}</h1>
       <h4>{city}</h4>
       <h5>{avgRating}</h5>
       <h5>{costForTwoMessage}</h5>
       <p>{cuisines.join(", ")}</p>
       {itemCards.map((items) => (
        <li key={items?.card?.info?.id}>{items?.card?.info?.name} - {items?.card?.info?.price}</li>
       ))}

    </div>
  )
}

export default RestraMenu