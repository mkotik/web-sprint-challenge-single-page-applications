import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerWrap">
      <h1 className="headerTitle">Lamba Eats</h1>
      <nav>
        <div className="homeBtnWrap">
          <Link className="homeBtn" to="/">
            Home
          </Link>
        </div>
        <div className="helpBtnWrap">
          <Link className="helpBtn" to="/">
            Help
          </Link>
        </div>
      </nav>
    </div>
  );
}
