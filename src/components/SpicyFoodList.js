import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [dropdown, setDropdown] = useState("All");
 
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const combinedFood = [...foods, newFood];
    setFoods(combinedFood);
  }
  
  function handleLiClick(foodID) {
    const newFoodArray = foods.map((food) => {
      if (food.id === foodID) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    
    setFoods(newFoodArray);
  }

  function handleDropdown(e) {
    setDropdown(e.target.value);
  }

  console.log(dropdown);

  let filteredFoodList = foods.filter((data) => {
    if (dropdown === "All") {
      return true;
    } else if (data.cuisine === dropdown) {
      return true;
    }else {
      return false
    }
  }).map((event)=>{
    return (
      <li key={event.id} onClick={()=>handleLiClick(event.id)}>{event.name} | {event.cuisine} | {event.heatLevel} </li>
    )
  })

  console.log(filteredFoodList)

  return (
    <div>
      <select name="filter" onChange={handleDropdown}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{filteredFoodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
