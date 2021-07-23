import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerWrap">
      <h1 className="headerTitle">Lambda Eats</h1>
      <nav>
        <Link className="homeBtn" to="/">
          <div className="homeBtnWrap">Home</div>
        </Link>
        <Link className="helpBtn" to="/">
          <div className="helpBtnWrap">Help</div>
        </Link>
      </nav>
    </div>
  );
}
