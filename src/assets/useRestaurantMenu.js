import { useEffect } from "react"
import {useState} from "react"
import { RESTAURANT_MENU_API } from "./resourceLinks"


const useRestaurantMenu = (resId) =>{
   const [restraMenu, setRestraMenu] = useState(null)
  

   useEffect(() =>{
     fetchData()
   }, [])

   const fetchData = async() =>{
      const response = await fetch(RESTAURANT_MENU_API + resId)
      const json = await response.json()
      setRestraMenu(json.data)
   }
   return restraMenu
}



export default useRestaurantMenu