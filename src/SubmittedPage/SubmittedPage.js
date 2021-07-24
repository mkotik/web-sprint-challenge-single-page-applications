import React from "react";
import "./SubmittedPage.css";

export default function SubmittedPage() {
  return (
    <div className="submittedPageWrap">
      <div className="submittedHero">
        <h2 className="submittedTitle">Congrats! Pizza is on its way!</h2>
      </div>
      <div className="submittedLower">
        <h3 className="submittedLowerText">Enjoy this Dog with Pizza</h3>
        <div className="gifWrap">
          <img
            className="gif"
            src="https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif"
          />
        </div>
      </div>
    </div>
  );
}
