import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useState} from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../assets/useOnlineStatus'


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

  setListRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
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

 const onlineStatus = useOnlineStatus()

 if(onlineStatus === false)
  return <h1>Looks like You are Offline! Please Check Your Internet Connection</h1>

  //listRestaurants.length === 0  ?  (<Shimmer />) :
  return  listRestaurants.length === 0  ?  (<Shimmer />) : (
    <div >
      <div className="flex border-solid p-4 bg-cover bg-center h-45 w-full items-center justify-center"  >
        {/* <h1>HOTFOOD</h1> */}
        <input className=' border-orange-500' type="text" value={searchText} placeholder='search restaurant' onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={searchHandler} className='m-7 border-solid border-orange-500'>search</button>
        <button onClick={topRatedHandler} className='border-solid  border-orange-500'>Top rated Restaurants</button>
      </div>
      
      <div className='flex flex-wrap p-5'>
        {filteredRestaurants.map((restaurant) =>(
         <Link key={restaurant.info.id} to= {"/restaurants/" + restaurant.info.id} >  <RestaurantCard  resData={restaurant} />  </Link> 
        ))}
      </div>
    </div>
  )
}

export default Body


