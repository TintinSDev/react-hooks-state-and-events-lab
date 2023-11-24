import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("all");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);

  }

  const filterItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);
<select id="category" value={selectedCategory} onChange={handleCategoryChange}></select>
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
