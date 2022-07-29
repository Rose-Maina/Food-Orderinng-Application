import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const RestaurantMeals = "https://secret-citadel-90517.herokuapp.com/menu"

function Home(){

const [meals, setMeals] = useState([])
// load items from the API
const mealFetcher = () => {
    fetch(RestaurantMeals)
        .then((response) => response.json())
        .then((data) => {
            setMeals(data)}
)
        }
    
useEffect(
    mealFetcher, []
    )
let menuCards = meals.map((meal) => (<MenuCard mealName={meal.itemName} mealImage={meal.img} mealPrice={meal.price} key={meal.id}/>))

return(
    <div className="container">
        <div className="row">
        {menuCards}
        </div>
        
    </div>
)
}

 export default Home;