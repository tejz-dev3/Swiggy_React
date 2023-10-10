import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useState} from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
function Body() {
 const [listRestaurants, setListRestaurants] = useState([])
 const [filteredRestaurants, setFilterRestaurants] = useState([])
 const [searchText, setSearchText]  = useState("")

 useEffect(() =>{
  fetchedData()
}, [])



const fetchedData = async() => {  //live data fetching
  const response = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.4929273&lng=78.4879809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await response.json()
  // console.log(json)
  setListRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // setListRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  const topRatedHandler = () =>{   //top rated restaurants
    const filteredList = listRestaurants.filter((res) => 
      res.info.avgRating > 4
    )
    setListRestaurants(filteredList)
  }

  const searchHandler = () =>{   //search bar
     const filteredRestaurants = listRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
     setFilterRestaurants (filteredRestaurants)
  }
  // console.log(listRestaurants);
  //listRestaurants.length === 0 ? (<Shimmer />) :
  return  listRestaurants.length === 0 ? (<Shimmer />) : (
    <div className='body-container'>
      <div className='search-container'>
        <input type="text" value={searchText} placeholder='search restaurant' onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={searchHandler}>search</button>
      </div>
      <button onClick={topRatedHandler}>Top rated Restaurants</button>
      <div className='restaurnt-container'>
        {filteredRestaurants.map((restaurant) =>(
         <Link key={restaurant.info.id} to= {"/restaurants/" + restaurant.info.id} >  <RestaurantCard  resData={restaurant} />  </Link> 
        ))}
      </div>
      
    </div>
  )
}

export default Body


