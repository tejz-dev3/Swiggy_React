import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "../components/Shimmer"
import {RESTAURANT_MENU_API} from '../assets/resourceLinks'

function RestraMenu() {  
const [restraMenu, setRestraMenu ] = useState(null)
    
   const {resId} = useParams()
    console.log(resId)
   useEffect(() =>{
    fetchData()
    },[])

    const fetchData = async() =>{
       const response =  await fetch (RESTAURANT_MENU_API + resId )
       const json  = await response.json()
       console.log(json)
       setRestraMenu(json.data)
    }
    
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
        <li key={itemCards?.card?.info?.id}>{items?.card?.info?.name} - {items?.card?.info?.price}</li>
       ))}

    </div>
  )
}

export default RestraMenu