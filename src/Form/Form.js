import React from "react";
import "./Form.css";
import styled from "styled-components";

function SectionDivider(props) {
  const { mainText, subText } = props;
  return (
    <div className="sectionDividerWrap">
      <h2>{mainText}</h2>
      <h3>{subText}</h3>
    </div>
  );
}

function FormTop() {
  return (
    <div className="formTop">
      <div className="formHeader">
        <h2 className="formTitle">Build Your Own Pizza</h2>
      </div>
      <div className="formImgWrap"></div>
      <div className="formSubHeader">
        <h2 className="formSubTitle">Build Your Own Pizza</h2>
      </div>
    </div>
  );
}

function SizeForm() {
  return (
    <div className="sizeForm">
      <select className="sizeSelect" name="size">
        <option value="">Select</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
}

function SauceForm() {
  return (
    <div className="sauceForm">
      <label>
        <input type="radio" name="sauce" value="Original Red" /> Original Red
      </label>
      <label>
        <input type="radio" name="sauce" value="Garlic Ranch" /> Garlic Ranch
      </label>
      <label>
        <input type="radio" name="sauce" value="BBQ Sauce" /> BBQ Sauce
      </label>
      <label>
        <input type="radio" name="sauce" value="Spinach Alfredo" /> Spinach
        Alfredo
      </label>
    </div>
  );
}
const toppings = [
  "Pepperoni",
  "Sausage",
  "Canadian Bacon",
  "Spicy Italian Sausage",
  "Grilled Chicken",
  "Onions",
  "Green Pepper",
  "Diced Tomatoes",
  "Black Olives",
  "Roasted Garlic",
  "Artichoke Hearts",
  "Three Cheese",
  "Pineapple",
  "Extra Cheese",
];

function ToppingInput(props) {
  const { topping } = props;
  return (
    <div className="toppingInput">
      <label>
        <input type="checkbox" name="topping" value={false} />
        {topping}
      </label>
    </div>
  );
}

function ToppingsForm() {
  return (
    <div className="toppingsForm">
      {toppings.map((topping) => (
        <ToppingInput topping={topping} />
      ))}
    </div>
  );
}

function SubstituteForm() {
  return (
    <div className="substituteForm">
      <label>
        <input type="checkbox" name="glutenFreeCrus" value={false} /> Gluten
        Free Crust (+ $1.00)
      </label>
    </div>
  );
}

function SpecialForm() {
  return (
    <div className="specialForm">
      <input
        type="text"
        name="specialInstructions"
        placeholder="Anything else you'd like to add?"
      />
    </div>
  );
}

function BottomTab() {
  return (
    <div className="bottomTab">
      <div className="bottomTabLeft">
        <input type="number" />
      </div>
      <div className="bottomTabRight">
        <button>
          <h3 className="bottomTabText">Add to Order</h3>
          <h3 className="bottomTabPrice">$17.99</h3>
        </button>
      </div>
    </div>
  );
}
export default function Form() {
  return (
    <div className="formBackground">
      <form className="formWrap">
        <FormTop />
        <SectionDivider mainText={"Choice of Size"} subText={"Required"} />
        <SizeForm />
        <SectionDivider mainText={"Choice of Sauce"} subText={"Required"} />
        <SauceForm />
        <SectionDivider mainText={"Add Toppings"} subText={"Choose up to 10"} />
        <ToppingsForm />
        <SectionDivider
          mainText={"Choice of Substitute"}
          subText={"Choose up to 1"}
        />
        <SubstituteForm />
        <SectionDivider mainText={"Special Instructions"} subText={""} />
        <SpecialForm />
        <BottomTab />
      </form>
    </div>
  );
}
