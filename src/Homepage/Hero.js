import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="wrap">
      <div className="contentWrap">
        <div className="mainTextWrap">
          <h1 className="mainText">
            Your favorite food, delivered while coding
          </h1>
        </div>
        <Link className="link" to="/pizza">
          <div className="pizzaBtnWrap">
            <h3 className="btnText">Pizza ?</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
