import React, {useState} from "react";

function Item({ name, category }) {
  const [ itemClassName, setitemClassName] = useState(false)
  const itemClass = itemClassName ? "in-cart" : ""

  function clickHandler(){
    console.log("I was clicked")
    setitemClassName(!itemClassName)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={clickHandler} className={itemClassName?"remove" :"add"}>{itemClassName?"Remove from Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
