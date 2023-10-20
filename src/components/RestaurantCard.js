import React from 'react'
import { CARD_URL } from '../assets/resourceLinks'

function RestaurantCard(props) {
  const {resData} = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwo,
    avgRating
  } = resData?.info

  return (
    <div className='p-4 '>
        <img src={ CARD_URL + cloudinaryImageId }
         alt="res-card-image"
         className='h-[200px] w-[250px] rounded-lg ' />
      <div className='card-data'>
         <h5>{name}</h5>
         <h6 className='res-card-cuisines'>{cuisines.join(",")}</h6>
         <h6>{areaName}</h6>
         <h6>{costForTwo}</h6>
         <h6>rating : {avgRating}</h6>
         </div>     
      </div>
  )
}

export default RestaurantCard