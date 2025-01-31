import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(!inCart);
  }
  const addCart = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addCart}</button>
    </li>
  );
}

export default Item;
