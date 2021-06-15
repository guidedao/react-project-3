import React, { useState } from "react";

export default function Item(props) {
  let [quantity, setQuantity] = useState(0);

  let handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  let handleMinusClick = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="item">
      <img src={props.items.image} />
      <div className="item-info">
        <h2>{props.items.name}</h2>
        <p>{props.items.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-less"
          onClick={handleMinusClick}
          disabled={quantity === 0}
        >
          -
        </button>
        <h3 className="item-count">{quantity > 0 && quantity}</h3>
        <button className="item-more" onClick={handlePlusClick}>
          +
        </button>
      </div>
    </div>
  );
}
