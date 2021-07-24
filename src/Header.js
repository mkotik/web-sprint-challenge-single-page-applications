import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

export default function Header() {
  return (
    <div className="headerWrap">
      <Link to="/" style={linkStyle}>
        <h1 className="headerTitle">Lambda Eats</h1>
      </Link>
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
