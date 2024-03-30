import { useState,useEffect } from 'react'
import { SWIGGY_API_URL } from './components/constant';
import RestaurantCard from './components/RestaruantCard';
import Header from './components/Header';
 
import './App.css'

function App() {
   
  const [Restaurants, setRestaurants] = useState([]);

 useEffect(() => {
    fetchRestaurantData()
  }, [])

  const fetchRestaurantData = async () => {
    // try/catch and async-await / then()catch()
    try {
      const response = await fetch(SWIGGY_API_URL)
      const json = await response.json()
      // Array -> find -> object -> card -> card -> id === restaurant_grid_listing returns the object

      //setRestaurants(json?.data?.cards?.find(obj => obj?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements.infoWithStyle?.restaurants)
      setRestaurants(json?.data?.cards?.find(obj => obj?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements.infoWithStyle?.restaurants)

    } catch (error) {
      console.log(error)
    }

  }

  function filterData(searchInput,searchRestro) {
    return SWIGGY_API_URL.filter((searchRestro) => {
      search.data.name(searchInput)
    });
     


  }
  const [searchRestro,setSearchRestro] = useState(SWIGGY_API_URL);
  const [searchInput,setSearchInput] = useState("");

  

  return (
    <>
    <div className="Home">
      <Header/>
    </div>

    <div className="search-box"/>
    <input 
    type="text"
    className="search-input"
    placeholder="Search"
    value={searchInput}
    onChange={(e) => {
      setSearchInput(e.target.value)
    }}
    />
     
    
    <button className="search-btn" onClick={() => {
      const data = filterData(searchInput,searchRestro);
      setSearchRestro(data);
      
    }}
    >Search</button>


    <div class="container mx-auto"/>
  <div class="flex flex-row"/>
    <div class="restaurant-item p-4 rem">
        {
          Restaurants?.map((res) => (
            <RestaurantCard info = {res?.info} key={res?.info?.id?.lastMileTravel} />
          ))
        }
        </div>
      
    </>
  )
}

export default App