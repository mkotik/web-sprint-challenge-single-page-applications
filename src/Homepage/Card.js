import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="cardWrapWrap">
      <div className="cardWrap">
        <div className="imgWrap">
          <img
            className="img"
            src="https://i0.wp.com/www.eatthis.com/wp-content/uploads/2021/06/mcdonalds-2.jpg?resize=1250%2C702&ssl=1"
          ></img>
        </div>
        <div className="infoWrap">
          <h3 className="title">McDonald's</h3>
          <h3 className="summary">$ - American - Fast Food - Burgers</h3>
          <div className="deliveryInfoWrap">
            <div className="deliveryTimeWrap">
              <h4 className="deliveryTimeText">20 - 30 Min</h4>
            </div>
            <div className="deliveryFeeWrap">
              <h4 className="deliveryFeeText">$5.99 Delivery Fee</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
