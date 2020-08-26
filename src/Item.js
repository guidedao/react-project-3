import React, { useState } from "react";

export default function Item() {
  return (
    <div className="item">
      <img src="Сюда идет картинка" />
      <div className="item-info">
        <h2>Сюда идет название</h2>
        <p>Сюда идет описание</p>
      </div>
      <div className="item-quantity">
        <button className="item-less">-</button>
        <h3 className="item-count">0</h3>
        <button className="item-more">+</button>
      </div>
    </div>
  );
}
