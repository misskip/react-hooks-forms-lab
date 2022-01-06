import React, { useState } from "react";
import Dropdown from './Dropdown';
import Item from "./Item";


function ShoppingList({ items, value, onChange, setValue }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return <div style={{width: 300}}>
  <div className="ShoppingList">
    <div className= "Dropdown">
      <Dropdown 
      items={items}
      prompt="Select Item"
      value={value}
      onChange={value => setValue(value)}/>
    </div>
    </div>
  </div>
;
}

export default ShoppingList;
