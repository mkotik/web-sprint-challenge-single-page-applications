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

function SizeForm(props) {
  const { onChange, formData } = props;
  return (
    <div className="sizeForm">
      <select
        value={formData.size}
        className="sizeSelect"
        name="size"
        onChange={onChange}
      >
        <option value="">Select</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
}

function SauceForm(props) {
  const { onChange, formData } = props;
  return (
    <div className="sauceForm">
      <label>
        <input
          type="radio"
          name="sauce"
          value="Original Red"
          onChange={onChange}
        />
        Original Red
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="Garlic Ranch"
          onChange={onChange}
        />
        Garlic Ranch
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="BBQ Sauce"
          onChange={onChange}
        />
        BBQ Sauce
      </label>
      <label>
        <input
          type="radio"
          name="sauce"
          value="Spinach Alfredo"
          onChange={onChange}
        />
        Spinach Alfredo
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
  const { topping, onChange } = props;
  return (
    <div className="toppingInput">
      <label>
        <input
          onChange={onChange}
          type="checkbox"
          name={topping.toLowerCase()}
          value={false}
        />
        {topping}
      </label>
    </div>
  );
}

function ToppingsForm(props) {
  const { onChange } = props;
  return (
    <div className="toppingsForm">
      {toppings.map((topping) => (
        <ToppingInput onChange={onChange} topping={topping} />
      ))}
    </div>
  );
}

function SubstituteForm(props) {
  const { onChange } = props;
  return (
    <div className="substituteForm">
      <label>
        <input
          onChange={onChange}
          type="checkbox"
          name="glutenFreeCrust"
          value={false}
        />{" "}
        Gluten Free Crust (+ $1.00)
      </label>
    </div>
  );
}

function SpecialForm(props) {
  const { onChange } = props;
  return (
    <div className="specialForm">
      <input
        onChange={onChange}
        type="text"
        name="specialInstructions"
        placeholder="Anything else you'd like to add?"
      />
    </div>
  );
}

function BottomTab(props) {
  const { onChange } = props;
  return (
    <div className="bottomTab">
      <div className="bottomTabLeft">
        <input
          placeholder="Quantity"
          onChange={onChange}
          name="quantity"
          type="number"
        />
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
export default function Form(props) {
  const { onChange, onSubmit, formData } = props;
  return (
    <div className="formBackground">
      <form className="formWrap" onSubmit={onSubmit}>
        <FormTop />
        <SectionDivider mainText={"Choice of Size"} subText={"Required"} />
        <SizeForm onChange={onChange} formData={formData} />
        <SectionDivider mainText={"Choice of Sauce"} subText={"Required"} />
        <SauceForm onChange={onChange} formData={formData} />
        <SectionDivider mainText={"Add Toppings"} subText={"Choose up to 10"} />
        <ToppingsForm onChange={onChange} formData={formData} />
        <SectionDivider
          mainText={"Choice of Substitute"}
          subText={"Choose up to 1"}
        />
        <SubstituteForm onChange={onChange} formData={formData} />
        <SectionDivider mainText={"Special Instructions"} subText={""} />
        <SpecialForm onChange={onChange} formData={formData} />
        <BottomTab onChange={onChange} />
      </form>
    </div>
  );
}
