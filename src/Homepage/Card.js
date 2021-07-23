import React from "react";
import "./Card.css";

export default function Card(props) {
  const { store } = props;
  return (
    <div className="cardWrapWrap">
      <div className="cardWrap">
        <div className="imgWrap">
          <img className="img" src={store.imageURL}></img>
        </div>
        <div className="infoWrap">
          <h3 className="title">{store.name}</h3>
          <h3 className="summary">{store.summary}</h3>
          <div className="deliveryInfoWrap">
            <div className="deliveryTimeWrap">
              <h4 className="deliveryTimeText">{store.deliveryTime} Min</h4>
            </div>
            <div className="deliveryFeeWrap">
              <h4 className="deliveryFeeText">
                ${store.deliveryFee} Delivery Fee
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
