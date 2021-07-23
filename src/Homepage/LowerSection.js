import React, { useState } from "react";
import Card from "./Card.js";
import "./LowerSection.css";
import initialStores from "./storesData";

export default function LowerSection() {
  const [stores, setStores] = useState(initialStores);
  console.log(stores);
  return (
    <div>
      <h1 className="foodDelivTitle">Food Delivery in Gotham City</h1>
      <div className="lowerContentWrap">
        {stores.map((store) => (
          <Card store={store} />
        ))}
      </div>
    </div>
  );
}
