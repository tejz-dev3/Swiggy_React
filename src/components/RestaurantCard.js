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
    <div className='m-6 h-1/4 flex flex-col w-17'>
        <img src={ CARD_URL + cloudinaryImageId }
         alt="res-card-image"
         className='h-[230px] w-[290px] rounded-lg ' />
      <div className='p-2 flex-wrap'>
         <h5 className='	text-lg font-bold  '>{name}</h5>
         <h6 className='font-mono text-xs'>{areaName}</h6>
         <h6 className='font-mono text-sm font-semibold'>{costForTwo}</h6>
         <h6 className='text-xs font-bold'>rating : {avgRating}</h6>
         <h6 className='font-mono text-xs font-semibold'>{cuisines.join(",")}</h6>
        
         </div>     
      </div>
  )
}

export default RestaurantCard