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
    <div className='res-card-container'>
        <img src={ CARD_URL + cloudinaryImageId }
         alt="res-card-image"
         className='res-card-image' />
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